
function getSiteData(){try{const s=localStorage.getItem('alivfestSiteData');if(s)return JSON.parse(s);}catch(e){} return window.DEFAULT_SITE_DATA||{};}
function saveSiteData(data){localStorage.setItem('alivfestSiteData', JSON.stringify(data));}
function escapeHtml(str){return String(str ?? '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));}
function mountText(id,value){const el=document.getElementById(id); if(el) el.textContent=value ?? '';}
function mountHTML(id,html){const el=document.getElementById(id); if(el) el.innerHTML=html;}
document.querySelectorAll('.faqitem button').forEach(b=>b.addEventListener('click',()=>b.parentElement.classList.toggle('open')));
document.querySelectorAll('[data-filter-group]').forEach(g=>{const buttons=g.querySelectorAll('[data-filter]');const target=document.querySelector(g.dataset.target);if(!target)return;const items=target.querySelectorAll('[data-category]');buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(x=>x.classList.remove('active'));btn.classList.add('active');const v=btn.dataset.filter;items.forEach(i=>{if(v==='all'||i.dataset.category.includes(v))i.classList.remove('hide');else i.classList.add('hide')})}))});
document.getElementById('year')?.replaceChildren(document.createTextNode(new Date().getFullYear()));
