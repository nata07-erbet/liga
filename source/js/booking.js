(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.header__btn-reserve');
    if(window.location.pathname === '/booking.html') {
      button.disabled = true;
    }
  });

})();
(function isActiveBath() {
  document.addEventListener('DOMContentLoaded', () => {
    const bathsChoiceis = document.getElementsByName('bath-choice');

    Array.from(bathsChoiceis).forEach((input) => {
      input.checked = false;
      input.disabled = false;
    })
  })

})();
(function getGuestQuantity() {
  document.addEventListener('DOMContentLoaded', () => {
    const decreaseButtonAdults = document.querySelector('div[data-counter-type="adults"] button[data-counter="decrease"]');
    const increaseButtonAdults = document.querySelector('div[data-counter-type="adults"] button[data-counter="increase"]');

    const decreaseButtonChild = document.querySelector('div[data-counter-type="child"] button[data-counter="decrease"]');
    const increaseButtonChild = document.querySelector('div[data-counter-type="child"] button[data-counter="increase"]');

    const decreaseButtonBaby = document.querySelector('div[data-counter-type="baby"] button[data-counter="decrease"]');
    const increaseButtonBaby = document.querySelector('div[data-counter-type="baby"] button[data-counter="increase"]');

    const adultInput = document.querySelector('input[name="adults-qty"]');
    const childInput = document.querySelector('input[name="child-qty"]');
    const babyInput = document.querySelector('input[name="baby-qty"]');

    const adultsWidget = document.querySelector('div[data-widget="adults"] span');
    const childrenWidget = document.querySelector('div[data-widget="child"] span');

    const DEFAULT_VALUE = {
      adults: 1,
      child: 0,
      baby: 0,
    };

    const MIN_VALUE = {
      minAdults: 2,
      minChild: 0,
      minBaby: 0,
    };

    const MAX_VALUE = {
      maxAdults: 10,
      maxChild: 9,
      maxBaby: 4,
    };

    decreaseButtonAdults.disabled = false;
    decreaseButtonChild.disabled = false;
    decreaseButtonBaby.disabled= false;

    adultInput.removeAttribute('readonly');
    childInput.removeAttribute('readonly');
    babyInput.removeAttribute('readonly');

    adultInput.value = DEFAULT_VALUE.adults;
    childInput.value =DEFAULT_VALUE.child;
    babyInput.value = DEFAULT_VALUE.baby;

    const upDate = (widget, value) => {
      widget.textContent = value;
    };

    const setValueDec = (input, min) => {
      let currentValue = parseInt(input.value);

      if (currentValue > min) {
        input.value = currentValue - 1;
      };
      return input.value;
    };

    const setValueInc = (input, max) => {
      let currentValue = parseInt(input.value);

      if(currentValue < max) {
        input.value = currentValue + 1;
      }
      return input.value;
    };

    const CapacityBathMap = {
      Nomad: 4,
      KurnayaIzba: 3,
      Healer:6,
      Olkhon: 6,
      TaigaMin: 5,
      TaigaMax: 10,
      Babies: 4
    }

    const inputsBath = document.getElementsByName('bath-choice');
    const nomadInput = document.getElementById('nomad');
    const kurnayaIzbaInput = document.getElementById('kurnaya-izba');
    const healerInput =  document.getElementById('healer');
    const olkhonInput = document.getElementById('olkhon');
    const taigaInput = document.getElementById('taiga');

    const setNonActiveBath = (bathInput, total, capacity, babyInput) => {
      if (bathInput) {
        bathInput.disabled = total > capacity && babyInput.value < 4;
}
    };

    const setNonActiveBathTaiga = (bathInput, total, capacityMin, capacityMax) => {
      bathInput.disabled = !(total >= capacityMin && total <= capacityMax && babyInput.value >= 4);
    };

    const isValidInput = (value) => {
      const regex = /^\d+$/;

      return regex.test(value);
    };

    const updateBathAvailability = () => {
      const totalCount = Number(adultsWidget.textContent) + Number(childrenWidget.textContent) ;

      setNonActiveBath(nomadInput, totalCount, CapacityBathMap.Nomad);
      setNonActiveBath(kurnayaIzbaInput, totalCount, CapacityBathMap.KurnayaIzba);
      setNonActiveBath(healerInput, totalCount, CapacityBathMap.Healer);
      setNonActiveBath(olkhonInput, totalCount, CapacityBathMap.Olkhon);

      setNonActiveBathTaiga(taigaInput, totalCount, CapacityBathMap.TaigaMin, CapacityBathMap.TaigaMax);
    };


    decreaseButtonAdults.addEventListener('click', () => {
      setValueDec(adultInput ,MIN_VALUE.minAdults );
      upDate(adultsWidget, adultInput.value);
      updateBathAvailability();
    });

    increaseButtonAdults.addEventListener('click', () => {
      setValueInc(adultInput, MAX_VALUE.maxAdults);
      upDate(adultsWidget, adultInput.value);
      updateBathAvailability();
    });

    decreaseButtonChild.addEventListener('click', () => {
      setValueDec(childInput ,MIN_VALUE.minChild);
      upDate(childrenWidget, childInput.value);
      updateBathAvailability();
    });

    increaseButtonChild.addEventListener('click', () => {
      setValueInc(childInput, MAX_VALUE.maxChild);
      upDate(childrenWidget, childInput.value);
      updateBathAvailability();
    });

    decreaseButtonBaby.addEventListener('click', () => {
      setValueDec(babyInput ,MIN_VALUE.minBaby);
      updateBathAvailability();
    });

    increaseButtonBaby.addEventListener('click', () => {
      setValueInc(babyInput, MAX_VALUE.maxBaby);
      updateBathAvailability();
    });

    adultInput.addEventListener('change', (evt) => {
      if(!isValidInput(adultInput.value)) {
        alert('Вводите только цифры');
      } else {
        upDate(childrenWidget, childInput.value);
        updateBathAvailability();
      }

    });

    childInput.addEventListener('change', () => {
      if(!isValidInput(childInput.value)) {

      } else {
        upDate(childrenWidget, childInput.value);
        updateBathAvailability();
      }
    });

    babyInput.addEventListener('change', () => {
      if(!isValidInput(babyInput.value)) {
        alert('Вводите только цифры');
      } else {
        pdateBathAvailability();
      }
    })
  });
})();

(function api () {
  let flatpickrInstance = null;
  const limitInit = 30;
  const requestedDates = new Set();

  const getDate = (date) => {
    const yeardateInit = date.getFullYear().toString();
    const mounthdateInit = (date.getMonth() + 1).toString().padStart(2,'0');
    const daydateInit = date.getDate().toString().padStart(2,'0');

    const dateInit = `${yeardateInit}-${mounthdateInit}-${daydateInit}`;
    return dateInit;
  };
  const dateToDay  = new Date();
  const dateToDayParam = getDate(dateToDay);
  // const limit = limitInput ? Number(limitInput) : 30;
  // const limitParam = limit > 60 ? 60 : limit;
  async function getTimesIntervals () {
  try {
    const response = await fetch('/api/times');

    if(!response.ok) {
      throw new Error(`Ошибка ${response.status}`)
    }
    const data = await response.json();
    return data;

    }catch(error){
      console.log(error);
    }
  };

  async function getCalendar () {
    try {
      const response = await fetch(`/api/calendar?start=${dateToDayParam}&limit=${limitInit}`); //GET /api/calendar?start=YYYY-MM-DD&limit=30

      if(!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return data;

    } catch(error) {
      console.error(error);
    }
  };

  async function getDataFromMounth (currentDateObj) {
    const currentDate = getDate(currentDateObj);

    try {
      if(requestedDates.has(currentDate)) {
        return
      } else {
        const response = await fetch (`/api/calendar?start=${currentDate}&limit=${limitInit}`);
        if(!response.ok) {
          throw new Error();
        };

        const data = await response.json();
        const enabledDates = Array.isArray(data) ? data : [];
        flatpickrInstance.set('enable', enabledDates);
        requestedDates.add(currentDate);
    }

    } catch(error){
      console.error(error);
    }
};

window.addEventListener('DOMContentLoaded', async () => {
  const inputDateTime = document.getElementById('date-and-time');
    inputDateTime.classList.remove('visually-hidden');

    const times  =  await getTimesIntervals();
    const calendar = await getCalendar();

    const dateToDay  = new Date();
    const disableBeforeToday = [{
      from: '1900-01-01',
      to: getDate(dateToDay),
    }];

    const availableDates = calendar ? calendar : [];

    flatpickrInstance = flatpickr(inputDateTime, {
      dateFormat: 'Y-m-d',
      defaultDate: null,
      disable: disableBeforeToday,
      // enable: calendar,
      inline: true,
      enableTime: true,
      minTime: '16:00',
      maxTime: '22:00',
      onMonthChange: (selectedDates, dateStr, instance) => {
        const selectedDate = selectedDates[0];
        const nextMonth = new Date(instance.currentYear, instance.currentMonth, 1);

        getDataFromMounth(nextMonth);
      },
      })
});
})();
