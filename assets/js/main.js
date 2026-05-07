
const toggle=document.querySelector('.menu-toggle');const links=document.querySelector('.nav-links');if(toggle){toggle.addEventListener('click',()=>links.classList.toggle('open'))}
const y=document.getElementById('year'); if(y){y.textContent=new Date().getFullYear()}
const booking=document.getElementById('bookingForm'); if(booking){booking.addEventListener('submit',e=>{e.preventDefault();document.getElementById('formMsg').textContent='Thank you! This demo form is ready for GitHub Pages. Connect it to Formspree, Google Forms, or a backend later.'})}
