const giftCertificate = () => {
  const giftBlock = document.querySelector('.certificates__fieldset')
  const giftInput = document.querySelector('.custom-toggle input[type="checkbox"]');
  const handleChangeGift = (evt) => {
    if(evt.target.checked) {
      giftBlock.classList.remove('certificates__fieldset--gift')
    }
  };

  giftInput.addEventListener(onchange, handleChangeGift)
};

export {giftCertificate}
