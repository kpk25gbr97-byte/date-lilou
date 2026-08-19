const pages = document.querySelectorAll('.page');
const soundIntro = document.querySelector('#sound-intro');
const spotifyEmbed = document.querySelector('#spotify-embed');
const dismissIntro = () => { spotifyEmbed.src = spotifyEmbed.dataset.src; soundIntro.classList.add('gone'); };
soundIntro.addEventListener('click', dismissIntro);
soundIntro.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); dismissIntro(); } });
const show = id => { pages.forEach(p => p.classList.toggle('active', p.id === id)); window.scrollTo({top:0,behavior:'smooth'}); };
const no = document.querySelector('#no'); let dodges = 0;
function dodge(){const p=no.parentElement.getBoundingClientRect(), x=Math.random()*(p.width-80)-p.width/2, y=(Math.random()-.5)*150; no.style.position='relative';no.style.left=`${x}px`;no.style.top=`${y}px`;no.textContent=['presque…','raté 😌','impossible','héhé'][dodges++%4];}
['mouseenter','touchstart','click'].forEach(e=>no.addEventListener(e,dodge,{passive:false}));
document.querySelector('#yes').addEventListener('click',()=>show('choice'));
document.querySelectorAll('.date-card').forEach(card=>card.addEventListener('click',()=>{document.querySelector('#chosen').textContent=card.dataset.choice;show('note')}));
const text=document.querySelector('#message'), count=document.querySelector('#count');text.addEventListener('input',()=>count.textContent=`${text.value.length} / 300`);
document.querySelector('#send').addEventListener('click',()=>{const note=text.value.trim();document.querySelector('#final').textContent=note?`Ton mot est bien gardé : “${note}” ♡`:'J’ai trop hâte de passer ce moment avec toi. ♡';document.querySelector('#final').style.display='block';});
