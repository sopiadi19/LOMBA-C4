/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    //whem the scroll is greater than 50 viewport height, add the scroll-header class
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scrollup')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to header
    this.scrollY >= 50 ? header.classList.add('show-scroll')
                       : header.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelectorAll('.nav_menu a[href*='+ sectionId +']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset true // animation repeat
})

sr.reveal('.home_data, .products_data .steps_content footer_container')
sr.reveal('.home_img', {origin: 'bottom'})
sr.reveal('.products_card', {inteval: 100})
sr.reveal('.about_img .testimonial_img', {origin: 'right'})
sr.reveal('.about_img .testimonial_img', {origin: 'left'})






