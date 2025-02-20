const showCertificate = () => {
  const buttonShow = document.querySelector('button.btn.btn--bordered[data-open-modal="certificate"]');
  const certificate =  document.querySelector('modal-certificate');
  const handleOpenPopup = () => {
    certificate.classList.add('is-active');
  }

  buttonShow.addEventListener('click', handleOpenPopup);
};

export { showCertificate };
