const menu = document.querySelector('#menu');
const menuIcon = document.querySelector('#menuIcon');
function showMenu() {
  menu.classList.toggle('show');
  changeMenuIcon();
}
menuIcon.addEventListener('click', showMenu);

addEventListener('resize', ()=>{
  if(window.innerWidth > 768){
    menu.classList.remove('show');
    changeMenuIcon();
  }
});

function changeMenuIcon(){
  if(menu.classList.contains('show')){
    menuIcon.src = 'assets/icons/iconCloseMenu.svg';
    menuIcon.title = 'Fechar menu'
  }else{
    menuIcon.src = 'assets/icons/iconMenu.svg';
    menuIcon.title = 'Mostrar menu'
  }
}