const menuButton = document.querySelector('.menu-button');
function toggleMenu(){
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

function handleResize(){
    const nav = document.querySelector(".menu");
    if(window.innerWidth > 1000){
        nav.classList.remove("hide");
    }
    else{
        nav.classList.add("hide");
    }
}
toggleMenu();
menuButton.addEventListener('click', toggleMenu);

handleResize();
window.addEventListener('resize', handleResize);