const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 700
})

const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.navbar ul')
const links = document.querySelectorAll('.navbar ul li')

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open')
  links.forEach(link => {
    link.classList.toggle('fade')
  })
})

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.toggle('open')
  })
})
