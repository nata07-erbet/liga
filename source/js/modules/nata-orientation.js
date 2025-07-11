function setOrientation () {
   const modalCertificate = document.querySelector('.modal-certificate');

   const verticalInput = document.querySelector('input[value="vertical"]');
   const horisontInput = document.querySelector('input[value="horizontal"]');

   verticalInput.addEventListener('change', (evt) => {
      if(evt.target.checked) {
        alert(1);

        modalCertificate.classList.remove('is-horizontal');
        modalCertificate.classList.add('is-vertical')
      };
   });

   horisontInput.addEventListener('change', (evt) => {
    alert(2);

    if(evt.target.checked) {
      modalCertificate.classList.remove('is-horizontal');
      modalCertificate.classList.add('is-horizontal')
    }
   })
  };


// const orientation = () => {n
//   alert(1);


//   const modal = document.querySelector('.modal-certificate');
//   const inputs = document.querySelectorAll('input[name="certif-orientation"]');

//   inputs.forEach((input) => input.addEventListener('onchange', (evt) => {
//     if (evt.target.checked && input.value === 'vertical') {
//       modal.classList.add('is-vertical');
//     } else if (evt.target.checked && input.value === 'horizontal') {
//       modal.classList.remove('is-vertical');
//     }
//   }));
// };

export { setOrientation }
