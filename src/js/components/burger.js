// BURGER
document.getElementById("burger").addEventListener('click', () => {
  document.querySelector('.header').classList.toggle('open')
})

document.querySelectorAll('.nav__link').forEach((el) => {
  el.addEventListener('click', () => {
    document.querySelector('.header').classList.remove('open');
  })
})
