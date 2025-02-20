const bathHouseIsActive = () => {
  const items = document.querySelectorAll('.main-nav__item');

  items.map((item) => {
    item.classList.contains('is-active')
    ? ''
    : item.classList.add('is-active');
  })
};


export {bathHouseIsActive}
