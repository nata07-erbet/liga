// Когда пользователь оказывается на странице бронирования, кнопка Забронировать баню в меню становится неактивной

const  buttonNotActive = () => {
  const button = document.querySelector('.header__btn-reserve');

  if(!button.hasAttribute('disabled')) {
    button.setAttribute('disabled', '');
  }
};

export {buttonNotActive}
