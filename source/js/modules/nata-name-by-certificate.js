const dataByCertificate = () => {
  const certificateMessage = document.querySelector('.modal-certificate__message');
  const certificatePrice = document.querySelector('.modal-certificate__price');

  const inputNameValue = document.getElementById('name').value;
  const buttonView = document.querySelector('.btn--bordered');
  const inputGift = document.querySelector('.custom-toggle input[type="checkbox"]');
  const inputNameGiftValue = document.getElementById('name-gift').value;
  const messageGiftValue = document.getElementById('message').value;

  const certificateOptions = document.querySelectorAll('input[name="certificate-option"]');

  const handleButtonView = () => {
    certificateMessage.textContent = inputNameValue;

    if(inputGift.checked) {
      certificateMessage.textContent = inputNameGiftValue + messageGiftValue;
    }
  };

  certificateOptions.map((input) => input.checked === true
  ? certificatePrice.textContent = input.value
  : '');

  buttonView.addEventListener('click', handleButtonView);
};

export {dataByCertificate};

