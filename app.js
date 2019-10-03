const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 700
})

const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.navbar ul')
const links = document.querySelectorAll('.navbar li')

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open')
})
