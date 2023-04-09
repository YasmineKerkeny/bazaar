const hamburger = document.querySelector('.hamburger');
const hamMenu = document.querySelector('.ham-list');

hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  hamMenu.classList.toggle('active');
});
