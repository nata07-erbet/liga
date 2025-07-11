const setAdultsValue = () => {
  const inputElement = document.querySelector('input[name="adults-qty"]');
  if (inputElement) {
    inputElement.value = 2;
  }
};

export {setAdultsValue};
