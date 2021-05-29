let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let formBtn = document.querySelector('#btninfo');
let loginForm = document.querySelector('.wisata-form-container');
let formClose = document.querySelector('#form-close');

let formBtn2 = document.querySelector('#btninfo2');
let loginForm2 = document.querySelector('.hutan-form-container');
let formClose2 = document.querySelector('#form-close2');

let formBtn3 = document.querySelector('#btninfo3');
let loginForm3 = document.querySelector('.situ-form-container');
let formClose3 = document.querySelector('#form-close3');

let formBtn4 = document.querySelector('#btninfo4');
let loginForm4 = document.querySelector('.gj45-form-container');
let formClose4 = document.querySelector('#form-close4');

let formBtn5 = document.querySelector('#btninfo5');
let loginForm5 = document.querySelector('.buaya-form-container');
let formClose5 = document.querySelector('#form-close5');

let formBtn6 = document.querySelector('#btninfo6');
let loginForm6 = document.querySelector('.water-form-container');
let formClose6 = document.querySelector('#form-close6');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

formBtn2.addEventListener('click', () =>{
    loginForm2.classList.add('active');
});

formClose2.addEventListener('click', () =>{
    loginForm2.classList.remove('active');
});

formBtn3.addEventListener('click', () =>{
    loginForm3.classList.add('active');
});

formClose3.addEventListener('click', () =>{
    loginForm3.classList.remove('active');
});

formBtn4.addEventListener('click', () =>{
    loginForm4.classList.add('active');
});

formClose4.addEventListener('click', () =>{
    loginForm4.classList.remove('active');
});

formBtn5.addEventListener('click', () =>{
    loginForm5.classList.add('active');
});

formClose5.addEventListener('click', () =>{
    loginForm5.classList.remove('active');
});

formClose5.addEventListener('click', () =>{
    loginForm6.classList.remove('active');
});

formBtn6.addEventListener('click', () =>{
    loginForm6.classList.add('active');
});

formClose6.addEventListener('click', () =>{
    loginForm6.classList.remove('active');
});


var swiper = new Swiper(".ulasan-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});