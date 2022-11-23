const menuBtn = document.querySelector('.header__menu-btn');
const headerNav = document.querySelector('.header__nav');
const coverBg = document.querySelector('.cover-bg');
const main = document.querySelector('.main');
const navigation = document.querySelector('.navigation');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuOpen = true;
        menuBtn.classList.add('open');
        headerNav.classList.add('active');
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        headerNav.classList.remove('active');
    }
})

// newsletter section

function newsletterForm() {
    const form = document.querySelector('#subscribe-form');
    const formControl = document.querySelector('.form-control');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const input = document.querySelector('input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
    })

    function checkInputs() {
        // get the values from the inputs

        const usernameValue = username.value.trim();
        const emailValue = email.value.trim(); 
    
        if(usernameValue === '') {
            setErrorFor(username, 'Username cannot be blank')
        } else {
            setSuccessFor(username)
        }

        if(emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
        } else if(!isEmail(emailValue)) {
            setErrorFor(email, 'Email is not valid');
        } else {
            setSuccessFor(email);
        }
    }

    function setErrorFor(input,message) {
        const formControl = input.parentElement.parentElement; // .form-control
        console.log(formControl);
        const small = formControl.querySelector('small');

        //add error message in small
        small.innerText = message;

        // add error class
        formControl.className = 'form-control error';
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement.parentElement; // .form-control

        formControl.className = 'form-control success';

    }

    function isEmail(email) {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

        // return  /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/.test(email);
    };
};

newsletterForm();

