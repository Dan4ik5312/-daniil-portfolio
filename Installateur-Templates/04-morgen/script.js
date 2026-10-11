'use strict';
document.documentElement.classList.add('js');
const c = window.KUNDE || {};
document.querySelectorAll('[data-field]').forEach(el=>{const key=el.dataset.field;if(typeof c[key]==='string' && c[key].trim())el.textContent=c[key]});
if(c.title) document.title=c.title;
if(c.description) document.querySelector('meta[name="description"]').content=c.description;
if(c.heroTitle){const heading=document.querySelector('h1');heading.textContent=c.heroTitle;}
if(c.heroImage){const img=document.querySelector('.hero-visual img');img.src=c.heroImage;if(c.heroAlt)img.alt=c.heroAlt;}
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');
const closeMenu=()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open')};
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open)});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus()}});
const status=document.querySelector('.contact-status');
const demo=c.demo!==false;
document.querySelectorAll('[data-contact]').forEach(el=>{
 const phone=el.dataset.contact==='phone';const value=phone?c.phone:c.email;
 const valid=typeof value==='string'&&(phone?/^\+?[0-9 ()-]{7,25}$/.test(value):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)&&!value.endsWith('.invalid'));
 if(!demo&&valid){el.href=phone?'tel:'+value.replace(/[^+0-9]/g,''):'mailto:'+value;}
 else{el.href='#kontakt';el.addEventListener('click',()=>{status.hidden=false;status.textContent='Demo-Vorlage: Hier wird nach der Anpassung die Telefonnummer oder E-Mail-Adresse des Betriebs geöffnet.'})}
});
document.querySelector('.demo-bar').hidden=!demo;
const revealLegal=()=>{const id=location.hash.slice(1);if(id==='impressum'||id==='datenschutz'){document.getElementById(id).open=true}};
window.addEventListener('hashchange',revealLegal);revealLegal();
document.querySelectorAll('a[href="#impressum"],a[href="#datenschutz"]').forEach(a=>a.addEventListener('click',()=>{document.querySelector(a.getAttribute('href')).open=true}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

