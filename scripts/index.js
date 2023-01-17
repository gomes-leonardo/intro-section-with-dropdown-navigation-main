const features = document.querySelector('#features')
const activeState = document.querySelector('.features')
const clicked = document.querySelector('#arrow')

const company = document.querySelector('#company')
const activeCompany = document.querySelector('.company')
const clickedCompany = document.querySelector('.arrow')


features.addEventListener('click', (e) =>{
    activeState.classList.toggle('active')
    clicked.classList.toggle('clicked')

    
})

company.addEventListener('click', () =>{
    activeCompany.classList.toggle('actived')
    clickedCompany.classList.toggle('clicked')
})


// Mobile

const hamburger = document.querySelector('#hamburger')
const modal = document.querySelector('.modal')

const featuresMobile = document.querySelector('#features-mobile')
const wrapper = document.querySelector('.wrapper')
const iconClose = document.querySelector('#icon-close')

const linksFeature = document.querySelector('.links-feature')
const activeFeature = document.querySelector('.activated')
const header = document.querySelector('header')

const rotateArrow = document.querySelector('#arrowMobile')
const arrowRotate = document.querySelector('#arrowUp')
const containerCompany = document.querySelector('#company-mobile')
const linksCompany = document.querySelector('.links-company')


hamburger.addEventListener('click', () => {
    modal.classList.toggle('mobile')
    wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
    
    hamburger.style.display = 'none'
    iconClose.style.display ='block'
})

iconClose.addEventListener('click', () => {
    modal.classList.toggle('mobile')
    wrapper.style.backgroundColor = '#FFFF'
    hamburger.style.display = 'block'
    iconClose.style.display ='none'
})

featuresMobile.addEventListener('click', () =>{
    linksFeature.classList.toggle('activated')
    rotateArrow.classList.toggle('clicked')
})


containerCompany.addEventListener('click', () =>{
    linksCompany.classList.toggle('activatedCompany')
    arrowRotate.classList.toggle('clicked')
})