const ageGate = document.getElementById('ageGate');
const confirmAge = document.getElementById('confirmAge');
const leaveSite = document.getElementById('leaveSite');
const agePassed = sessionStorage.getItem('gelatoAgeConfirmed') === 'yes';
if (agePassed) ageGate.classList.add('hidden');
confirmAge.addEventListener('click', () => {
  sessionStorage.setItem('gelatoAgeConfirmed', 'yes');
  ageGate.classList.add('hidden');
});
leaveSite.addEventListener('click', () => {
  document.querySelector('.age-card').innerHTML = '<h2>Thanks for checking.</h2><p>This website is for adults of legal drinking age only.</p>';
});
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
const gallery = document.getElementById('galleryTrack');
document.getElementById('galleryPrev').addEventListener('click', () => gallery.scrollBy({left:-240,behavior:'smooth'}));
document.getElementById('galleryNext').addEventListener('click', () => gallery.scrollBy({left:240,behavior:'smooth'}));
document.getElementById('year').textContent = new Date().getFullYear();
