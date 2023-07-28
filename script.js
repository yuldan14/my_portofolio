
//click di luar sidebar


const navbarMenu=document.querySelector('header .navbar');
document.querySelector('header .navbar-extra #menu').onclick=()=>{
    navbarMenu.classList.toggle('aktif')
}
const menu=document.querySelector('header .navbar-extra #menu');
document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarMenu.contains(e.target)){
        navbarMenu.classList.remove('aktif');
    }
});