/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=============== SHOW MENU ===============*/
/* Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
/* Validate if constant exists*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav--link,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
const sendEmail = (e) =>{
    e.preventDefault()

// serviceID - templateID - #form - publicKey
emailjs.sendForm('service_2k6807r', 'template_et1peui', '#contact-form', 'fwTQNgs4RXL57F0b7')
      .then(() =>{
        //show sent message
        contactMessage.textContent = 'Message sent successfully '
        
        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        },5000)

        // Clear input fields
        contactForm.reset()
      }, () =>{
        //show error message
        contactMessage.textContent = 'Message not sent (service error) '
      })
}
contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                                           :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    sectionsClass.classList.add('active-link')
         }else{
            sectionsClass.classList.remove('active-link')
         }
    })
} 
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
   // reset:true //Animation repeat
})
sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin:'bottom'})
sr.reveal(`.about__data`, {origin:'left'})
sr.reveal(`.about__skills`, {origin:'right'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})
*/