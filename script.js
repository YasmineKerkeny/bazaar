const hamburger = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".ham-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamMenu.classList.toggle("active");
});
const header = document.querySelector('.header-home');

window.onscroll = function(){
  if(window.scrollY > 0){
    header.classList.add('change');
  }else{
    header.classList.remove('change');
  }
}
const sub = document.querySelector('.sub');
const add = document.querySelector('.add');
const value = document.querySelector('.value');
let total = 0;

value.innerHTML = total ; 
add.onclick = function (){
  total++;
  value.innerHTML = total;
}
sub.onclick = function(){
  total--;
  value.innerHTML = total;
}
