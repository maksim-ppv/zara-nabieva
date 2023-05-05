const btn = document.querySelector('.menu-button');
const menu = document.querySelector('.mobile_nav');
const burger = document.querySelector('.menu-button__line');
const navbarLink = document.querySelectorAll('.link__mobile');
const body = document.querySelector('body');
const buttonViber = document.querySelectorAll('.button_viber');



const modal = ()=>{
   body.classList.toggle('overflow-hidden');
   menu.classList.toggle('menu_active');
   btn.classList.toggle('line_active');
   buttonViber.forEach((item)=>{
      item.classList.toggle('btn_close')
   })
}
navbarLink.forEach((item)=>{
   item.addEventListener('click', modal)
});
btn.addEventListener('click', modal);

