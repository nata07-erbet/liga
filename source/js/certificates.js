(function defaultPrice () {
    const radioValue = document.getElementById('certif-1');
    if(radioValue) {
      radioValue.checked = true;
    }
  })();

(function getDataPrice() {
  window.addEventListener('DOMContentLoaded', () => {
    const dataPriceValue = document.querySelector("[data-price-value]");
    const radios = document.getElementsByName("certificate-option");

    function updatePrice() {
      const selectedRadio = document.querySelector(
        'input[name="certificate-option"]:checked'
      );
      if (dataPriceValue && selectedRadio) {
        dataPriceValue.textContent =
          Number(selectedRadio.value).toLocaleString("ru-RU") + " ₽";
      }
    };

    updatePrice();

    Array.from(radios).forEach((radio) => {
      radio.addEventListener("change", updatePrice);
    });
  })
})();

(function setOrientation() {
  window.addEventListener('DOMContentLoaded', () => {
    const modalCertificate = document.querySelector(".modal-certificate");

    const verticalInput = document.querySelector('input[value="vertical"]');
    const horisontInput = document.querySelector('input[value="horizontal"]');

    verticalInput.addEventListener("change", (evt) => {
      if (evt.target.checked) {
        modalCertificate.classList.remove("is-horizontal");
        modalCertificate.classList.add("is-vertical");
      }
    });

    horisontInput.addEventListener("change", (evt) => {
      if (evt.target.checked) {
        modalCertificate.classList.remove("is-vertical");
        modalCertificate.classList.add("is-horizontal");
      }
    });
  });
})();


(function openGiftForm() {
  window.addEventListener('DOMContentLoaded', () => {
    const giftForm = document.querySelector('[data-certificates="gift"]');
    const giftCheckBox = document.querySelector(
    '[data-certificates="toggle"] input[type="checkbox"]'
  );

  giftCheckBox.addEventListener("change", (evt) => {
    if (evt.target.checked) {
      giftForm.classList.remove("certificates__fieldset--gift");
    } else {
      giftForm.classList.add("certificates__fieldset--gift");
    }
  });
  })
})();


(function setNameAndPrice() {
  window.addEventListener('DOMContentLoaded', () => {
    const priceInputs = document.getElementsByName("certificate-option");

  const nameGiftInput = document.getElementById("name-gift");
  const messageInput = document.getElementById("message");

  const modalCertificatePrice = document.querySelector(
    ".modal-certificate__price"
  );
  const modalCertificateMessage = document.querySelector(
    ".modal-certificate__message"
  );

  const giftCheckBox = document.querySelector(
    '[data-certificates="toggle"] input[type="checkbox"]'
  );

  const updateCertificatePrice = () => {
    const selectedInput = Array.from(priceInputs).find(
      (input) => input.checked
    );
    const price = selectedInput
      ? Number(selectedInput.value).toLocaleString("ru-RU")
      : "50 000";
    modalCertificatePrice.textContent = price;
  };

  Array.from(priceInputs).forEach((input) => {
    input.addEventListener("change", updateCertificatePrice);
  });

  const updateCertificateNameAndMessage = () => {
    const name = nameGiftInput.value;
    const message = messageInput.value;

    if (giftCheckBox.checked) {
      if (name && message) {
        modalCertificateMessage.textContent = `${name}, ${message}`;
      } else {
        modalCertificateMessage.textContent = `${name}`;
      }
    } else {
      modalCertificateMessage.textContent = "";
    }
  };

  nameGiftInput.addEventListener("input", updateCertificateNameAndMessage);
  messageInput.addEventListener("input", updateCertificateNameAndMessage);

  updateCertificatePrice();
  updateCertificateNameAndMessage();
  });
})();

// <!--Обязательными полями для заполнения являются: Ваши имя и фамилия, Телефон, Email. Если выбрано условие сертификат в подарок, то обязательными становятся дополнительные поля Имя получателя и Телефон получателя. -->

(function isRequired() {
  window.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.custom-input input');
    Array.from(inputs).forEach((input) => input.setAttribute('required', ''));
  })
})();


(function isRequiredGift() {
  window.addEventListener('DOMContentLoaded', () => {
    const fieldsetGift = document.querySelector('[data-certificates="gift"]');
    const inputsGift = Array.from(fieldsetGift.querySelectorAll("input"));

    inputsGift.forEach((input) => input.setAttribute("required", ""));

  })
})();

// <!--При клике на кнопку Перейти к оплате должна происходить валидация формы.-->

(function SendForm() {
  window.addEventListener('DOMContentLoaded', () => {
    const priceInputs = document.getElementsByName("certificate-option");

    const fieldsetGift = document.querySelector('[data-certificates="gift"]');
    const inputs = document.querySelectorAll(".custom-input input");
    const inputsGift = Array.from(fieldsetGift.querySelectorAll("input"));
    const giftToggle = document.querySelector(
      '[data-certificates="toggle"] input[type="checkbox"]'
    );

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    phone.setAttribute('inputmode', 'numeric');
    phone.setAttribute('maxlength', 11);
    phone.addEventListener('input', () => {
      phone.value = phone.value.replace(/\D/g, '')
    });

    const email = document.getElementById("email");
    email.setAttribute('type', 'email');

    const nameGift = document.getElementById("name-gift");
    const phoneGift = document.getElementById("phone-gift");
    const message = document.getElementById("message");

    const verticalInput = document.querySelector('input[value="vertical"]');

    const isNotEmpty = (arrInputs) => {
      return Array.from(arrInputs).every((input) => input.value.trim() !== "");
    };

    const isRequiredInputs = (arrInputs) => {
      return Array.from(arrInputs).every((input) => input.required);
    };

    const isValid = () => {
      if (giftToggle && giftToggle.checked) {
        return isNotEmpty(inputs) &&
          isNotEmpty(inputsGift) &&
          isRequiredInputs(inputs) &&
          isRequiredInputs(inputsGift);
      } else {
        return isNotEmpty(inputs) && isRequiredInputs(inputs);
      }
    };

    const OrientMap = {
      Vertical: "vertical",
      Horizontal: "horizontal",
    };

    const updateOrient = (verticalInput) => {
      return verticalInput.checked ? OrientMap.Vertical : OrientMap.Horizontal;
    };

    const getSelectedCertificatePrice = () => {
      const selectedInput = Array.from(priceInputs).find(
        (input) => input.checked
      );
      return selectedInput ? Number(selectedInput.value) : 0;
    };

    const form = document.querySelector('form[action="/api/buy/certificate"]');
    if (!form) {
      console.warn('Форма не найдена');
      return;
    }

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      alert(2);

      const sum = getSelectedCertificatePrice();
      const orientation = updateOrient(verticalInput);

      const formData = {
        sum: sum,
        orientation: orientation,
        payer: {
          name: name.value,
          phone: phone.value,
          email: email.value,
        },
        client: {
          name: nameGift.value,
          phone: phoneGift.value,
          comment: message.value,
        },
      };

      // if (!isValid()) {
      //   form.reportValidity();
      //   return;
      // }

      async function postData () {
        try {
          const response = await fetch('https://echo.htmlacademy.ru/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            window.location.href = "/certificates-success.html";
          } else {
            window.location.href = "/certificates-error.html";
          }
        } catch (error) {
          console.error("Error:", error);
          window.location.href = "/certificates-error.html";
        }
      }

      postData();
    });
  });
})();

