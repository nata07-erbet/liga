//Обязательными полями для заполнения являются: Ваши имя и фамилия, Телефон, Email. Если выбрано условие сертификат в подарок, то обязательными становятся дополнительные поля Имя получателя и Телефон получателя.

const setAttributes = () => {
  document.getElementById('name').setAttribute('required', '');
  document.getElementById('phone').setAttribute('required', '');
  document.getElementById('email').setAttribute('required', '');
};

export {setAttributes};

