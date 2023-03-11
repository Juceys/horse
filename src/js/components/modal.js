// MODAL
const buttons = document.querySelectorAll('.btn__singup')
const modalOverlay = document.querySelector('.modal__overlay')
const modal = document.querySelector('.modal')
const body = document.querySelector('.page__body')
const modalExit = document.querySelector('.modal__exit')

buttons.forEach(button => {
  button.addEventListener('click', (e) => {

    modalOverlay.classList.add('modal__overlay--visible')
    modal.classList.add('modal--visible')
    body.classList.add('scroll--block')
  })
})

modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal__overlay--visible');
    modal.classList.remove('modal--visible');
    body.classList.remove('scroll--block')
  }
});
modalExit.addEventListener('click', () => {
    modalOverlay.classList.remove('modal__overlay--visible');
    modal.classList.remove('modal--visible');
    body.classList.remove('scroll--block')
});
