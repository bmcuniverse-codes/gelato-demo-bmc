const gate=document.getElementById('ageGate');
const enter=document.getElementById('enterBtn');
const leave=document.getElementById('leaveBtn');
document.body.classList.add('gated');
if(sessionStorage.getItem('gelatoAgeConfirmed')==='yes'){gate.classList.add('hidden');document.body.classList.remove('gated')}
enter.addEventListener('click',()=>{sessionStorage.setItem('gelatoAgeConfirmed','yes');gate.classList.add('hidden');document.body.classList.remove('gated')});
leave.addEventListener('click',()=>{gate.querySelector('.gate-panel').innerHTML='<div class="gate-logo">GELATO</div><h2>THANK YOU.</h2><p>This website is intended for adults aged 18 and above only.</p><small>Please close this page.</small>'});
const toggle=document.getElementById('menuToggle'),nav=document.getElementById('nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));
document.getElementById('year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
