// При клике на кнопку Перейти к оплате должна происходить валидация формы.

// При успешной валидации происходит отправка формы по ajax (fetch post) на url, который указан в атрибуте action у формы (в путях указываем название хоста в гите). При успешной отправке формы происходит переход на страницу завершения покупки сертификата. При неуспешной отправке формы - переход на страницу ошибки покупки сертификата.

const sendForm = () => {
  const button = document.querySelector('.btn.form__desktop');

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const isValid = () => !!name || !!phone || !!email;

    if (isValid) {
      const formData = {
        certificatesName: name,
        certificatesPhone: phone,
        certificatesEmail: email,
      };

      fetch('/api/buy/certificate', {
        method: 'POST',
        body: JSON.stringify(formData),
      })
          .then((response) => {
            if (!response.ok) {
              window.location.pathname = '/certificates-error.html';
              throw new Error('Сетевой ответ не в пределах ожидаемого.');
            }
            window.location.pathname = 'certificates-success.html';
            return response.json();
          });
    }
  };

  if (button) {
    button.addEventListener('click', handleFormSubmit);
  }
};

export {sendForm};
