const sumCertificate = () => {
  const dataPriceValue = document.querySelector('span[data-price-value]');

  const onChangeValue = (evt) => {
    alert(2);
    dataPriceValue.textContent = evt.target.value;
  };

  const inputs = document.querySelectorAll('div.certificate-option > input');
  inputs.map((input) => input.addEventListener(onchange, onChangeValue));
};

export {sumCertificate}
