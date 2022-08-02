const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const controls = document.querySelector('.controls');
const contactBtn = document.querySelector('.contact-me-btn');
const getInTouch = document.querySelector('.get-in-touch');
const contactPage = document.querySelector('.contact');
const contactMail = document.querySelector('#c-email');
const contactName = document.querySelector('#c-name');
const contactInfo = document.querySelector('#c-info');
const contactMessage = document.querySelector('#c-message');
const sendButton = document.querySelector('#submit');
let toggle = false;

console.log(contactMail.value);

if(window.innerWidth < 601){
    toggle = true
}
window.onresize = () => {
    if(window.innerWidth < 601){
            toggle = true;
    controls.classList.add('hide');

        } else {
            toggle = false;
    controls.classList.remove('hide');

        }
}
if(toggle){
    controls.classList.add('hide');
}else if(!toggle){
    controls.classList.remove('hide');
}
const pageTransition = () => {
// Button Click active class
Array.from(secBtn).map((s, i)=>{
    secBtn[i].addEventListener('click', function(){
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
        this.className += ' active-btn';
        if(toggle){
            controls.classList.toggle('hide');
        }
    })
})

//Sections Active Class

allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id){
        // first remove selected from the other bars
        secBtns.forEach((btn) => {
            btn.classList.remove('active');
        })
        e.target.classList.add('active');

        // hide other sections
        sections.forEach((sec) => {
            sec.classList.remove('active');
        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
    
})

//Toggle theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', ()=> {
    let element = document.body;
    element.classList.toggle('light-mode');
})

//Toggle Menu

const menu = document.querySelector('.burger-menu');
menu.addEventListener('click', ()=> {
    controls.classList.toggle('hide');
})

// contact me button
contactBtn.addEventListener('click', ()=> {

    contactPage.classList.add('active');

})
getInTouch.addEventListener('click', ()=> {

    contactPage.classList.add('active');

})

}

pageTransition();


function sendEmail() {
    emailjs.init('DkbTMDWUtCexhQDtO');
    emailjs.sendForm('contact_service', 'contact_form', this)
    .then(
		message => console.log(message)
	).catch(
        err => console.log(err)
    );
}