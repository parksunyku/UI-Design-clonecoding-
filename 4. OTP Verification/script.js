const inputs = document.querySelectorAll('.opt-card-inputs');
const button = document.querySelector('.opt-card button');

inputs.forEach((e) => {
  let lastInputStatus = 0;
  inputs.onkeyup = (e) => {
    const currentElement = e.target;
    const nextElement = input.nextElementSibling;
    const prevElement = input.preveiousElementSibling;

    if (prevElement && e.keyCode === 8) {
      if (lastInputStatus === 1) {
        prevElement.value = '';
        prevElement.focus();
      }
      button.setAttribute('disabled', true);
      lastInputStatus = 1;
    } else {
      const reg = /^[0-9]+$/;
      if (!reg.test(currentElement.value)) {
        currentElement.value = currentElement.value.replace(/\D/g, '');
      } else if (currentElement.value) {
        if (nextElement) {
          nextElement.focus();
        } else {
          button.removeAttribute('disabled');
          lastInputStatus = 0;
        }
      }
    }
  };
});
