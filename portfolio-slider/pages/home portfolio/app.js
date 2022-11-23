const btn = document.querySelector('.menu__btn');
const navList = document.querySelector(".nav__list");
const myBtn = document.getElementById('myBtn');
const menuBars = document.querySelector('.menu-bars');
const menuClose = document.querySelector('.menu-close');


btn.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    if(navList.classList.contains('active')) {
        menuClose.style.display = 'block';
        menuBars.style.display = 'none'
    } else {
        menuClose.style.display = 'none';
        menuBars.style.display = 'block'
    }
})

// when the user scrolls down 20px from the topof the document,show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = 'block';
    } else {
        myBtn.style.display = 'none';
    }
}

// when the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




