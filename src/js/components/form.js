//SEND FORM

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);



  async function formSend(e) {
    e.preventDefault();
    let error = formValidation(form);
    if (error !== 0) {
    alert("обязательное поле")
    }

    console.log(error)
  }

  function formValidation(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      removeError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          addError(input);
          error++;
        }
      } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
        addError(input);
        error++;
      } else {
        if (input.value === "") {
          addError(input);
          error++;
        }
      }
    }
    console.log(error)
    return error;

  }

  function addError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function removeError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  // проверка email
  function emailTest(input) {
    return !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(input.value);
  }

})

