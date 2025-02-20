const orientation = () => {
  const modal = document.querySelector('.modal-certificate');
  const inputs = document.querySelectorAll('input[name="certif-orientation"]');

  console.log(inputs);

  inputs.map((input) => input.addEventListener('onchange', (evt) => {
    if(evt.target.checked && input.value === 'vertical') {
      modal.classList.add('is-vertical')
    } else if (evt.target.checked && input.value === 'horizontal') {
      modal.classList.remove('is-vertical')
    }
  }));
};

export {orientation}
