let menu=document.querySelector('#menu-icon')
let menu=document.querySelector('.navbar')
menu.onclick =()=> {
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active');

}