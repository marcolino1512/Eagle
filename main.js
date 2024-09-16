let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');


const botaoMusica=document.getElementById('play_btn');
const musica=new Audio('som/Snoop.mp3');


menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight; 
        let id =sec.getAttribute('id');
        if(top >= offset && top < offset + height ){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +  ']').classList.add('active');
            })
        }
    })
    let header=document.querySelector('header');
    
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .eagle-box, .contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p, .abou-content', {origin:'right'});

// typed js

const typed=new Typed('.multiple-text',{
    strings:['Design','Site','Gestão','Assessoria'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

botaoMusica.addEventListener("click",()=>{
    if (musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})

const lerMais=document.querySelectorAll('.p');

lerMais.forEach(btn => {
    btn.addEventListener('click', ()=>{
        lerMais.forEach(b=>{
            b.classList.remove('active');f
        });
    });
    btn.classList.toggle('active');
});

function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "eaglevision128@gmail.com",
        Password : "AEECB1FFA2A640FB1CCA916BAB07EE716137",
        To : 'eaglevision128@gmail.com',
        From : "eaglevision128@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );    
}