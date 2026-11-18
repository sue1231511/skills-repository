const OWNER='sue1231511';
const REPO='skills-repository';
const BRANCH='main';

const categoryNames={
  'all':'全部',
  'frontend-design':'前端设计',
  'photo-design':'照片设计',
  'video-production':'视频制作',
  'creative-visual':'创意视觉',
  'design-tools':'设计工具',
  'ai-prompts':'AI Prompt',
  'token-optimization':'Token 优化',
  'methodology':'方法论',
  'ai-tools':'AI 工具',
  'agent-memory':'Agent 记忆',
  'web-scraping':'数据采集',
  'voice-tts':'语音 TTS',
  'virtual-companion':'虚拟陪伴',
  'games':'游戏互动',
  'marketing-growth':'营销增长',
  'chrome-extensions':'浏览器扩展',
  'tools':'通用工具'
};

const ignoredExternalHosts=['uibakery.io','docs.lovable.dev'];
const state={query:'',category:'all',favoritesOnly:false,sort:'default'};
const favorites=new Set(JSON.parse(localStorage.getItem('skill-favorites')||'[]'));
const cart=new Set(JSON.parse(localStorage.getItem('skill-cart')||'[]'));
const visits=JSON.parse(localStorage.getItem('skill-visits')||'{}');

let skills=[];

const grid=document.querySelector('#grid');
const empty=document.querySelector('#empty');
const searchInput=document.querySelector('#searchInput');
const categoryNav=document.querySelector('#categoryNav');
const favoriteToggle=document.querySelector('#favoriteToggle');
const sortSelect=document.querySelector('#sortSelect');
const stats=document.querySelector('#stats');
const dialog=document.querySelector('#detailDialog');
const dialogContent=document.querySelector('#dialogContent');
const cartDrawer=document.querySelector('#cartDrawer');
const cartBackdrop=document.querySelector('#cartBackdrop');
const cartToggle=document.querySelector('#cartToggle');
const cartCount=document.querySelector('#cartCount');
const cartTotal=document.querySelector('#cartTotal');
const cartList=document.querySelector('#cartList');
const cartEmpty=document.querySelector('#cartEmpty');
const cartPrompt=document.querySelector('#cartPrompt');
const cartCopy=document.querySelector('#cartCopy');

document.querySelector('#closeDialog').onclick=()=>dialog.close();
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

function humanize(file){
  return file.replace(/\.md$/,'').split('-').map(s=>s.length<=3?s.toUpperCase():s[0].toUpperCase()+s.slice(1)).join(' ');
}
function escapeHTML(s=''){
  return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}
function cleanText(s=''){
  return s.replace(/\*\*/g,'').replace(/`/g,'').replace(/\[(.*?)\]\((.*?)\)/g,'$1').trim();
}

async function discoverFiles(){
  const api=`https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`;
  const res=await fetch(api,{cache:'no-store',headers:{Accept:'application/vnd.github+json'}});
  if(!res.ok)throw new Error(`GitHub API ${res.status}`);
  const data=await res.json();
  return (data.tree||[])
    .filter(item=>item.type==='blob'&&item.path.endsWith('.md'))
    .map(item=>item.path.split('/'))
    .filter(parts=>parts.length===2&&categoryNames[parts[0]])
    .map(([category,file])=>[category,file])
    .sort((a,b)=>a[0].localeCompare(b[0])||a[1].localeCompare(b[1]));
}

function makeSkills(files){
  return files.map(([category,file],index)=>({
    id:`${category}/${file}`,
    category,
    file,
    index,
    name:humanize(file),
    description:'正在读取仓库说明…',
    tags:[],
    details:[],
    sourceUrl:'',
    docUrl:`https://github.com/${OWNER}/${REPO}/blob/${BRANCH}/${category}/${file}`,
    loaded:false
  }));
}

function parseMarkdown(md,skill){
  const lines=md.split(/\r?\n/);
  const heading=lines.find(l=>/^#\s+/.test(l));
  if(heading) skill.name=cleanText(heading.replace(/^#\s+/,'').split('｜')[0].trim());

  const funcIndex=lines.findIndex(l=>/^##\s+(功能描述|简介|描述|是什么)/.test(l));
  let desc='';
  if(funcIndex>=0){
    for(let i=funcIndex+1;i<Math.min(lines.length,funcIndex+8);i++){
      const line=lines[i].trim();
      if(line&&!line.startsWith('#')&&!line.startsWith('-')&&!line.startsWith('|')){
        desc=cleanText(line);
        break;
      }
    }
  }
  if(!desc){
    const candidate=lines.find((l,i)=>i>0&&l.trim()&&!l.startsWith('#')&&!l.startsWith('-')&&!l.startsWith('|')&&!l.startsWith('```'));
    if(candidate)desc=cleanText(candidate);
  }
  skill.description=desc||'已收录到你的 Skill Library。';

  const tags=[];
  const tagIndex=lines.findIndex(l=>/^##\s+分类标签/.test(l));
  if(tagIndex>=0){
    for(let i=tagIndex+1;i<Math.min(lines.length,tagIndex+5);i++){
      tags.push(...[...lines[i].matchAll(/`([^`]+)`/g)].map(m=>m[1]));
    }
  }
  skill.tags=[...new Set(tags)].slice(0,5);

  const detailHeadings=/^(?:#{2,3})\s+(核心特性|核心能力|适用场景|触发方式|使用方式|使用建议|特点|工作方式|安装方式|仓库)$/;
  const details=[];
  for(let i=0;i<lines.length;i++){
    const match=lines[i].trim().match(detailHeadings);
    if(!match)continue;
    const title=match[1];
    const items=[];
    let text='';
    for(let j=i+1;j<lines.length;j++){
      const line=lines[j].trim();
      if(/^#{2,3}\s+/.test(line))break;
      if(!line)continue;
      if(/^[-*]\s+/.test(line))items.push(cleanText(line.replace(/^[-*]\s+/,'')));
      else if(!line.startsWith('|')&&!line.startsWith('```')&&!text)text=cleanText(line);
    }
    if(items.length||text)details.push({title,items:items.slice(0,6),text});
  }
  skill.details=details.slice(0,4);

  const urls=[...md.matchAll(/https?:\/\/[^\s)\]>]+/g)].map(m=>m[0].replace(/[.,]$/,''));
  const githubUrls=urls.filter(u=>/github\.com\//.test(u)&&!u.includes(`${OWNER}/${REPO}`));
  const external=urls.filter(u=>!ignoredExternalHosts.some(h=>u.includes(h))&&!u.includes(`${OWNER}/${REPO}`));
  skill.sourceUrl=githubUrls[0]||external[0]||'';
  skill.loaded=true;
}

async function hydrate(skill){
  try{
    const url=`https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${skill.id}`;
    const res=await fetch(url,{cache:'no-store'});
    if(!res.ok)throw new Error(res.status);
    parseMarkdown(await res.text(),skill);
  }catch{
    skill.description='打开仓库说明查看完整信息。';
    skill.loaded=true;
  }
  renderCard(skill);
  updateStats();
}

function getFiltered(){
  let list=skills.filter(s=>state.category==='all'||s.category===state.category);
  if(state.favoritesOnly)list=list.filter(s=>favorites.has(s.id));
  const q=state.query.trim().toLowerCase();
  if(q)list=list.filter(s=>[s.name,s.description,s.category,...s.tags].join(' ').toLowerCase().includes(q));
  if(state.sort==='az')list.sort((a,b)=>a.name.localeCompare(b.name));
  if(state.sort==='recent')list.sort((a,b)=>(visits[b.id]||0)-(visits[a.id]||0));
  return list;
}

function cardHTML(s){
  const fav=favorites.has(s.id);
  const inCart=cart.has(s.id);
  const url=s.sourceUrl||s.docUrl;
  return `<article class="skill-card${inCart?' selected':''}" data-id="${s.id}">
    <div class="card-top">
      <span class="category-pill">${escapeHTML(categoryNames[s.category]||s.category)}</span>
      <button class="star-btn ${fav?'active':''}" data-fav="${s.id}" aria-label="收藏 ${escapeHTML(s.name)}">${fav?'★':'☆'}</button>
    </div>
    <h3>${escapeHTML(s.name)}</h3>
    ${s.loaded?`<p>${escapeHTML(s.description)}</p>`:`<div class="loading-line" style="width:92%"></div><div class="loading-line" style="width:70%"></div>`}
    ${s.tags.length?`<div class="tags">${s.tags.slice(0,3).map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div>`:''}
    <div class="card-actions">
      <a class="visit-link" data-visit="${s.id}" href="${escapeHTML(url)}" target="_blank" rel="noreferrer">${s.sourceUrl?'访问 Skill ↗':'查看说明 ↗'}</a>
      <span class="card-right">
        <button class="cart-add-btn ${inCart?'active':''}" data-cart="${s.id}" aria-pressed="${inCart}">${inCart?'✓ 已选':'+ 待选'}</button>
        <button class="detail-btn" data-detail="${s.id}">详情</button>
      </span>
    </div>
  </article>`;
}

function renderCategories(){
  const counts={all:skills.length};
  skills.forEach(s=>counts[s.category]=(counts[s.category]||0)+1);
  categoryNav.innerHTML=Object.keys(categoryNames)
    .filter(k=>counts[k])
    .map(k=>`<button class="category-btn ${state.category===k?'active':''}" data-category="${k}"><span>${categoryNames[k]}</span><span>${counts[k]}</span></button>`)
    .join('');
}

function updateStats(){
  const loaded=skills.filter(s=>s.loaded).length;
  const sourceCount=skills.filter(s=>s.sourceUrl).length;
  const categoryCount=new Set(skills.map(s=>s.category)).size;
  stats.innerHTML=`<span>条目<b>${skills.length}</b></span><span>分类<b>${categoryCount}</b></span><span>原项目<b>${sourceCount}</b></span><span>已读取<b>${loaded}/${skills.length}</b></span>`;
}

function render(){
  const list=getFiltered();
  grid.innerHTML=list.map(cardHTML).join('');
  empty.hidden=list.length!==0;
  grid.hidden=list.length===0;
  favoriteToggle.classList.toggle('active',state.favoritesOnly);
  favoriteToggle.textContent=state.favoritesOnly?'收藏中':'收藏';
  updateStats();
  bindCardEvents();
  updateCartUI();
}

function renderCard(skill){
  const el=grid.querySelector(`[data-id="${skill.id}"]`);
  if(!el)return;
  const tpl=document.createElement('template');
  tpl.innerHTML=cardHTML(skill).trim();
  const fresh=tpl.content.firstElementChild;
  el.replaceWith(fresh);
  bindCardEvents(fresh);
}

function bindCardEvents(root=document){
  root.querySelectorAll('[data-fav]').forEach(btn=>btn.onclick=e=>{
    e.preventDefault();
    const id=btn.dataset.fav;
    favorites.has(id)?favorites.delete(id):favorites.add(id);
    localStorage.setItem('skill-favorites',JSON.stringify([...favorites]));
    render();
  });
  root.querySelectorAll('[data-visit]').forEach(a=>a.onclick=()=>{
    visits[a.dataset.visit]=Date.now();
    localStorage.setItem('skill-visits',JSON.stringify(visits));
  });
  root.querySelectorAll('[data-detail]').forEach(btn=>btn.onclick=()=>openDetail(btn.dataset.detail));
  root.querySelectorAll('[data-cart]').forEach(btn=>btn.onclick=e=>{
    e.preventDefault();
    const id=btn.dataset.cart;
    cart.has(id)?cart.delete(id):cart.add(id);
    saveCart();
    render();
    updateCartUI(true);
  });
}

/* ---------- 待选区（购物车） ---------- */

function saveCart(){
  localStorage.setItem('skill-cart',JSON.stringify([...cart]));
}

function cartItems(){
  return [...cart].map(id=>skills.find(s=>s.id===id)).filter(Boolean);
}

function usableDesc(s){
  return s.loaded&&s.description&&!s.description.startsWith('正在读取')?s.description:'';
}

function buildPrompt(items){
  if(!items.length)return '';
  const lib='https://sue1231511.github.io/skills-repository/';
  if(cartFormat.value==='plain'){
    return `【AI Library 待选清单 · ${items.length} 个 Skill】\n来源：${lib}\n\n`+
      items.map((s,i)=>`${i+1}. ${s.name}｜${s.sourceUrl||s.docUrl}`).join('\n');
  }
  const lines=[`我从 AI Library（${lib}）挑了 ${items.length} 个候选 Skill，请逐个打开对应仓库、阅读 README 与安装说明，帮我判断哪些值得用、该怎么接入。`,''];
  items.forEach((s,i)=>{
    lines.push(`${i+1}. ${s.name}（${categoryNames[s.category]||s.category}）`);
    const desc=usableDesc(s);
    if(desc)lines.push(`   简介：${desc}`);
    lines.push(`   链接：${s.sourceUrl||s.docUrl}`);
    if(s.tags.length)lines.push(`   标签：${s.tags.join(' ')}`);
    lines.push('');
  });
  lines.push('请按这个结构输出：① 每个 Skill 解决什么问题、核心特性；② 安装/接入成本；③ 成熟度（Stars、最近维护、许可证）；④ 与我需求的匹配度；⑤ 最后给出优先级排序：直接推荐 / 可一试 / 暂缓，并说明理由。');
  return lines.join('\n').trim();
}

function updateCartUI(refreshPrompt=false){
  const items=cartItems();
  cartCount.textContent=items.length;
  cartTotal.textContent=items.length;
  cartToggle.classList.toggle('active',items.length>0);
  cartEmpty.hidden=items.length!==0;
  cartList.hidden=items.length===0;
  cartList.innerHTML=items.map(s=>{
    const desc=usableDesc(s);
    return `<div class="cart-item">
      <div class="cart-item-main">
        <a class="cart-item-name" href="${escapeHTML(s.sourceUrl||s.docUrl)}" target="_blank" rel="noreferrer">${escapeHTML(s.name)} ↗</a>
        <div class="cart-item-meta"><span class="category-pill">${escapeHTML(categoryNames[s.category]||s.category)}</span></div>
        ${desc?`<p>${escapeHTML(desc)}</p>`:''}
      </div>
      <button class="cart-item-remove" data-remove="${s.id}" aria-label="移除 ${escapeHTML(s.name)}">×</button>
    </div>`;
  }).join('');
  document.querySelectorAll('[data-remove]').forEach(btn=>btn.onclick=()=>{
    cart.delete(btn.dataset.remove);
    saveCart();
    render();
    updateCartUI(true);
  });
  if(refreshPrompt||!cartPrompt.value)cartPrompt.value=buildPrompt(items);
}

function setCartOpen(open){
  cartDrawer.classList.toggle('open',open);
  cartBackdrop.classList.toggle('show',open);
  if(open)updateCartUI(true);
}

document.querySelector('#cartClose').onclick=()=>setCartOpen(false);
cartBackdrop.onclick=()=>setCartOpen(false);
cartToggle.onclick=()=>setCartOpen(!cartDrawer.classList.contains('open'));
document.querySelector('#cartAddAll').onclick=()=>{
  const list=getFiltered();
  if(!list.length)return;
  list.forEach(s=>cart.add(s.id));
  saveCart();
  render();
  updateCartUI(true);
};
document.querySelector('#cartClear').onclick=()=>{
  if(!cart.size)return;
  cart.clear();
  saveCart();
  render();
  updateCartUI(true);
};
document.querySelector('#cartFormat').onchange=()=>updateCartUI(true);
cartCopy.onclick=async()=>{
  const text=cartPrompt.value.trim();
  if(!text){
    cartCopy.textContent='待选区还是空的';
    setTimeout(()=>cartCopy.textContent='复制导出内容',1600);
    return;
  }
  let ok=false;
  try{await navigator.clipboard.writeText(text);ok=true}catch{}
  if(!ok){
    try{cartPrompt.focus();cartPrompt.select();ok=document.execCommand('copy')}catch{}
  }
  if(ok){
    cartCopy.textContent='已复制 ✓ 去粘贴给 Agent';
    cartCopy.classList.add('done');
  }else{
    cartPrompt.focus();
    cartPrompt.select();
    cartCopy.textContent='请按 Ctrl/⌘+C 复制';
  }
  setTimeout(()=>{
    cartCopy.textContent='复制导出内容';
    cartCopy.classList.remove('done');
  },1800);
};

function openDetail(id){
  const s=skills.find(x=>x.id===id);
  if(!s)return;
  visits[id]=Date.now();
  localStorage.setItem('skill-visits',JSON.stringify(visits));
  const url=s.sourceUrl||s.docUrl;
  const detailHTML=(s.details||[]).map(section=>`<section class="dialog-section"><h3>${escapeHTML(section.title)}</h3>${section.items?.length?`<ul>${section.items.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul>`:`<p>${escapeHTML(section.text||'')}</p>`}</section>`).join('');
  dialogContent.innerHTML=`<div class="dialog-scroll"><div class="dialog-header"><span class="category-pill">${escapeHTML(categoryNames[s.category]||s.category)}</span><h2>${escapeHTML(s.name)}</h2><p class="dialog-lead">${escapeHTML(s.description)}</p><div class="detail-meta">${(s.tags.length?s.tags:['未标注标签']).map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div></div>${detailHTML||`<section class="dialog-section"><h3>收录说明</h3><p>当前条目还没有更多结构化说明，可以打开仓库文档查看原始记录。</p></section>`}<div class="dialog-actions"><a class="primary-link" href="${escapeHTML(url)}" target="_blank" rel="noreferrer">${s.sourceUrl?'访问原项目':'打开说明'} ↗</a>${s.sourceUrl?`<a class="secondary-link" href="${s.docUrl}" target="_blank" rel="noreferrer">仓库说明</a>`:''}</div></div>`;
  dialog.showModal();
}

categoryNav.addEventListener('click',e=>{
  const b=e.target.closest('[data-category]');
  if(!b)return;
  state.category=b.dataset.category;
  renderCategories();
  render();
});
searchInput.addEventListener('input',e=>{state.query=e.target.value;render()});
favoriteToggle.onclick=()=>{state.favoritesOnly=!state.favoritesOnly;render()};
sortSelect.onchange=e=>{state.sort=e.target.value;render()};
document.addEventListener('keydown',e=>{
  if(e.key==='Escape')setCartOpen(false);
  if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){
    e.preventDefault();
    searchInput.focus();
  }
});

async function boot(){
  try{
    const files=await discoverFiles();
    skills=makeSkills(files);
    const valid=new Set(skills.map(s=>s.id));
    [...cart].forEach(id=>{if(!valid.has(id))cart.delete(id)});
    saveCart();
    renderCategories();
    render();
    Promise.allSettled(skills.map(hydrate));
  }catch(err){
    console.error(err);
    skills=[];
    renderCategories();
    render();
    empty.hidden=false;
    empty.textContent='读取 GitHub 仓库目录失败，请稍后刷新。';
  }
}

boot();
