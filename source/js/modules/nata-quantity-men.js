import {
  MIN_VALUE_ADULTS,
  MAX_VALUE_ADULTS
} from './constants.js';
const setQuantityAdults = () => {

  const decreaseButton = document.getElementById('parent > decrease');
  const increaseButton = document.getElementById('parent > increase');
  const adultsQtyInput = document.getElementById('adults-qty');

  const minValue = MIN_VALUE_ADULTS;
  const maxValue = MAX_VALUE_ADULTS;


  const handleDecButton = () => {
    let currentValue = adultsQtyInput.value;

    if (currentValue > minValue) {
      currentValue--;
      adultsQtyInput.value = currentValue;
    } else if (
      currentValue === minValue
    ) {
      decreaseButton.setAttribute('disabled', '');
    }
  };

  const handleIncButton = () => {
    let currentValue = adultsQtyInput.value;

    if (currentValue < maxValue) {
      currentValue++;
      adultsQtyInput.value = currentValue;
      decreaseButton.removeAttribute('disabled');
    } else if (currentValue > maxValue) {
      increaseButton.setAttribute('disabled', '');
    }
  };

  decreaseButton.addEventListener('click', handleDecButton);
  increaseButton.addEventListener('click', handleIncButton);
};

export {setQuantityAdults};

