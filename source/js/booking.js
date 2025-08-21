
const renderElement = (container, component, place = 'beforeend') => {
  container.insertAdjacentHTML(place, component);
};

const bathCardTemplate = (bath) => {
  return `<div class="bath-option" data-min=${bath.guest.min} data-max=${bath.guest.max} data-guest-min=${bath.guestMin}>
            <input class="visually-hidden" type="radio" value=${bath.id} id=${bath.id} name="bath-choice">
            <label for=${bath.id}>
              <span class="bath-option__wrapper">
                <span class="bath-option__img">
                  <picture>
                    <source type="image/webp" media="(max-width: 767px)" srcset=${bath.cover.mobile.webp}, ${bath.cover.mobile.webp2x} 2x">
                    <source media="(max-width: 767px)" srcset=${bath.cover.mobile.jpg}, ${bath.cover.mobile.jpg2x} 2x">
                    <source type="image/webp" srcset=${bath.cover.desktop.webp}, ${bath.cover.desktop.webp2x} 2x">
                    <img src=${bath.cover.desktop.jpg}" srcset=${bath.cover.desktop.jpg2x} 2x" width="818" height="513" alt=${bath.name}>
                  </picture>
                </span>
                <span class="bath-option__icon">
                  <svg width="20" height="20" aria-hidden="true">
                    <use xlink:href="#icon-check"></use>
                  </svg>
                </span>
                <span class="bath-option__title title title--xxs-3">${bath.name}</span>
                <span class="bath-option__row"><span class="bath-option__info">
                  <span class="text text--small">Количество гостей</span>
                  <span class="text text--body-medium-1 text--color-not-opacity">${bath.guest.min} — ${bath.guest.max}</span>
                </span>
                <span class="bath-option__info">
                  <span class="text text--small">Стоимость</span>
                  <span class="text text--body-medium-1 text--color-not-opacity">
                    <span>${bath.price}</span></span>
                  </span>
                </span>
                <span class="bath-option__message">
                  <span class="bath-option__message-date text text--small">Баня недоступна для&nbsp;бронирования
                    <span data-error-date> 15 сентября</span>
                  </span>
                  <span class="bath-option__message-guests text text--small">Баня недоступна для&nbsp;бронирования при&nbsp;указанном количестве гостей</span>
                  <span class="bath-option__message-time text text--small">Баня недоступна для&nbsp;бронирования в&nbsp;указанный временной интервал</span>
                </span>
              </span>
              <a class="link text text--small-caps-3" href="#" data-open-modal="bath">Подробнее о бане</a>
            </label>
          </div>`;
};

const timeSlotTemplate = ({id, interval}) => {
  // return `<button class="time-slot" type="button" data-time="slot" data-time-id=${id}>
  //           <span class="text text--small-caps">${interval.begin} — ${interval.end}</span>
  //         </button>`;
  return `<div class="time-slot" data-time="slot" data-time-id=${id}>
            <input class="visually-hidden" type="radio" value="${interval.begin} — ${interval.end}" id="time-${id}" name="time-choice">
            <label for="time-${id}">
            <span class="text text--small-caps">${interval.begin} — ${interval.end}</span>
            </label>
          </div>`;
};


(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.header__btn-reserve');
    if(window.location.pathname === '/booking.html') {
      button.disabled = true;
    }
  });
})();

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

async function loadBath () {
  try {
    const response = await fetch('./api/objects.json');
      if(!response.ok) {
        throw  new Error (`Ошибка: ${response.status}`);
      } else {
        const data = await response.json();
        console.log(data);
        return data;
      }
    } catch (error) {
      console.error(error);
    };
};

(async function renderBathList () {
  const BathContainer = document.querySelector('.select-bath__wrapper');
  const result  = await loadBath();

  if(!result || !Array.isArray(result.data)) {
    console.warn('Нет данных о банях или неверный формат');
    return;
  };

  const bathes = result.data;
  if (BathContainer) {
    bathes.forEach((bath) => {
      const bathCard = bathCardTemplate(bath);
      renderElement(BathContainer, bathCard);
    })
  };

  const bathesInputs = document.querySelectorAll('.bath-option input');
  const dataBath = document.querySelector('[data-widget="bath"]');


  bathesInputs.forEach((bathInput) => {
      bathInput.addEventListener('change', () => {
        if(result && bathInput.checked) {
          const bathOption = bathInput.closest('.bath-option');
          const title = bathOption.querySelector('.bath-option__title');
          dataBath.textContent = title.textContent.trim();
        }
      })
    })

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
    adultInput.addEventListener('input', () => {
      adultInput.value = adultInput.value.replace(/\D/g, '')
    });
    const childInput = document.querySelector('input[name="child-qty"]');
    childInput.addEventListener('input', () => {
      childInput.value = childInput.value.replace(/\D/g, '')
    });

    const babyInput = document.querySelector('input[name="baby-qty"]');
    babyInput.addEventListener('input', () => {
      babyInput.value = babyInput.value.replace(/\D/g, '')
    });

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

    const nomadInput = document.getElementById('nomad');
    const kurnayaIzbaInput = document.getElementById('kurnaya-izba');
    const healerInput =  document.getElementById('healer');
    const olkhonInput = document.getElementById('olkhon');
    const taigaInput = document.getElementById('taiga');

    const setNonActiveBath = (bathInput, total, capacity, babiesInput) => {
      if (bathInput) {
        bathInput.disabled = total > capacity || babiesInput > 4;
      }
    };

    const setNonActiveBathTaiga = (bathInput, total, capacityMin, capacityMax) => {
      bathInput.disabled = total < capacityMin || total > capacityMax;
    };

    const updateBathAvailability = () => {
      const babiesCount = Number(babyInput.value);
      const totalCount = Number(adultsWidget.textContent) + Number(childrenWidget.textContent);

      setNonActiveBath(nomadInput, totalCount, CapacityBathMap.Nomad, babiesCount);
      setNonActiveBath(kurnayaIzbaInput, totalCount, CapacityBathMap.KurnayaIzba, babiesCount);
      setNonActiveBath(healerInput, totalCount, CapacityBathMap.Healer, babiesCount);
      setNonActiveBath(olkhonInput, totalCount, CapacityBathMap.Olkhon, babiesCount);
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

    adultInput.addEventListener('change', () => {
      if(!isValidInput(adultInput)) {
        return;
      } else {
        upDate(adultsWidget, adultInput.value);
        updateBathAvailability();
      }
    });

    childInput.addEventListener('change', () => {
      if(!isValidInput(childInput.value)) {
        return;
      } else {
        upDate(childrenWidget, childInput.value);
        updateBathAvailability();
      }
    });

    babyInput.addEventListener('change', () => {
      if(!isValidInput(babyInput.value)) {
        return;
      } else {
        updateBathAvailability();
      }
    })
  });
})();


(function api () {

  const selectDateContainer = document.querySelector('[data-time="parent"]');
  const dataCalendarContainer = document.querySelector('[data-calendar]');

  const inputDateTime = document.getElementById('date-and-time');
  let flatpickrInstance = null;
  const limitInit = 30;
  const requestedDates = new Set();

  const getDate = (date) => {
    const yearDateInit = date.getFullYear().toString();
    const monthDateInit = (date.getMonth() + 1).toString().padStart(2,'0');
    const dayDateInit = date.getDate().toString().padStart(2,'0');

    const dateInit = `${yearDateInit}-${monthDateInit}-${dayDateInit}`;
    return dateInit;
  };
  const dateToDay  = new Date();
  const dateToDayParam = getDate(dateToDay);
  // const limit = limitInput ? Number(limitInput) : 30;
  // const limitParam = limit > 60 ? 60 : limit;

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

  async function getDataFromMonth (currentDate) {

    try {
      if(requestedDates.has(currentDate)) {
        return
      } else {
        const response = await fetch (`/api/calendar?start=${currentDate}&limit=${limitInit}`);
        if(!response.ok) {
          throw new Error();
        };

        const data = await response.json();
        return data;

        // flatpickrInstance.set('enable', freeDates);
        // requestedDates.add(currentDate);
    }

    } catch(error){
      console.error(error);
    }
};
  window.addEventListener('DOMContentLoaded', async () => {
    inputDateTime.classList.remove('visually-hidden');

    const dateToDay = new Date();
    const calendarResponse = await getCalendar();
    const calendarData = calendarResponse.data;
    const bookingWidgetDate = document.querySelector('.booking-widget__date');

    const  getFreeObj = (response) => {
      return Object
          .entries(response)
          .filter(([ _, info ]) => info.status == 3)
          .map(([date]) => date);
    };

    const getNonFreObj = (response) => {
      return Object
        .entries(response)
        .filter(([ _, info]) => info.status === 0 || info.status === 1 || info.status === 2)
        .map(([ date ])=> date);
    };

    const disableBeforeToday = [{
      from: '1900-01-01',
      to: getDate(dateToDay),
    }];

    const notFreeDates = getNonFreObj(calendarData);

    const notAvailableDates = [...disableBeforeToday, ...notFreeDates];


    const maxDays = 61;
    const breakpoint = window.matchMedia('(min-width: 768px)');
    let calendar;
    let flag = true;

    const renderTimeSlots = async () => {
      const result = await getTimesIntervals();
      const selectDateContainer = document.querySelector('[data-time="parent"]');
      selectDateContainer.innerHTML = ''; // Очистить перед вставкой
      const isLoadedSlots = result && Array.isArray(result.data) && result.data.length > 0;
      const slots = isLoadedSlots ? result.data : timeSlotsMock.data;

      slots.forEach(({ id, interval }) => {
        const timeSlot = timeSlotTemplate({ id, interval });
        renderElement(selectDateContainer, timeSlot);
      });

      const bookingWidgetTime = document.querySelector('.booking-widget__time');
      const timeInputs = document.querySelectorAll('.time-slot input');

      timeInputs.forEach((input) => {
            input.addEventListener('change', () => {
              if(result && input.checked)  {
                bookingWidgetTime.textContent = input.value;
              }
            });
        });
    };

    const renderCalendar = () => {
      const input = document.getElementById('date-and-time');
      const nextArrowSvg = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M10 17.5L15 12.5M10 17.5L5 12.5M10 17.5L10 1.66669" stroke="currentColor" stroke-linecap="round"/>  </svg>';
       const prevArrowSvg = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17.5L15 12.5M10 17.5L5 12.5M10 17.5L10 1.66669" stroke="currentColor" stroke-linecap="round"/></svg>';

      function initCalendarSwipe(flatpickrInstance) {
        let startX = null;
        let endX = null;
        let startY = null;
        let endY = null;

        const getDeltaX = () => startX - endX;
        const getDeltaY = () => startY - endY;

        const onTouchStart = (e) => {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
          document.addEventListener('touchmove', onTouchMove);
        };

        const onTouchMove = (e) => {
          e.preventDefault();
          endX = e.touches[0].clientX;
          endY = e.touches[0].clientY;
        };

        const onTouchEnd = (e) => {
          e.preventDefault();
          if (Math.abs(getDeltaX()) < Math.abs(getDeltaY())) return;
          if (getDeltaX() > 0) {
            flatpickrInstance.changeMonth(1);
          } else {
            flatpickrInstance.changeMonth(-1);
          }
          document.removeEventListener('touchmove', onTouchMove);
        };

        dataCalendarContainer.addEventListener('touchstart', onTouchStart);
        window.addEventListener('touchend', onTouchEnd);
      };

      calendar = flatpickr(input, {
        dateFormat: 'j-F-H-i',
        defaultDate: null,
        conjunction: ' - ',
        minDate: 'today',
        maxDate: new Date().fp_incr(maxDays),
        disable: notAvailableDates,
        nextArrow: nextArrowSvg,
        prevArrow: prevArrowSvg,
        inline: true,
        position: 'auto center',
        monthSelectorType: 'static',
        locale: {
          firstDayOfWeek: 1
        },
        onMonthChange: (instance) => {
          const nextMonth = new Date(instance.currentYear, instance.currentMonth, 1);
          renderTimeSlots(); // при смене месяца сбрасываем слоты
          getDataFromMonth(nextMonth);
        },
        onChange: (dateStr) => {
          const saveDate = (dateStr) => {
            const date = new Date(dateStr[0]);
            return date;
          };

          const inputDate = saveDate(dateStr);
          const formatDate = inputDate.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long'
          });

           if(bookingWidgetDate && dateStr) {
            bookingWidgetDate.textContent = formatDate;
           };

          if (flag) {
            let activeTime;
            let id;

            if (selectDateContainer.querySelector('input:checked')) {
              activeTime = selectDateContainer.querySelector('input:checked').closest('[data-time="slot"]');
              id = activeTime.dataset.timeId;
            }

            selectDateContainer.innerHTML = '';
            renderTimeSlots();

            if (activeTime && !selectDateContainer.querySelector(`[data-time-id="${id}"]`).hasAttribute('disabled')) {
              dataCalendarContainer.querySelector(`[data-time-id="${id}"] input`).checked = true;
            }

            flag = false;
          }

          if (!breakpoint.matches && window.accordions) {
            window.accordions.updateAccordionsHeight?.();
          }
        },
      });

      initCalendarSwipe(calendar);
    };

    const initCalendar = () => {
      renderCalendar();
    };
    initCalendar();
  });

  async function handleSubmitCheckBath () {
    const BASE_URL = ' https://echo.htmlacademy.ru/';

    const idBathes = document.querySelectorAll('input[name="bath-choice"]');
    const bathChecked = Array.from(idBathes).find((input) => input.checked);
    const idBathChecked =  bathChecked ? bathChecked.id : null;

    const adultsWidget = document.querySelector('div[data-widget="adults"] span');
    const childrenWidget = document.querySelector('div[data-widget="child"] span');
    const babyInput = document.querySelector('input[name="baby-qty"]');

    const babyValue = Number(babyInput.value);
    const adultValue = Number(adultsWidget.textContent);
    const childValue =  Number(childrenWidget.textContent);

    const timeSlots = document.querySelectorAll('input[name="time-choice"]');
    const timeSlotChecked = Array.from(timeSlots).find((input) => input.checked);
    const time = timeSlotChecked ?timeSlotChecked.value : null;

    calendar = flatpickr(input, {
      dateFormat: 'j-F-H-i',
      defaultDate: null,
      conjunction: ' - ',
      minDate: 'today',
      maxDate: new Date().fp_incr(maxDays),
      disable: notAvailableDates,
      nextArrow: nextArrowSvg,
      prevArrow: prevArrowSvg,
      inline: true,
      position: 'auto center',
      monthSelectorType: 'static',
      locale: {
        firstDayOfWeek: 1
      },
      onMonthChange: (instance) => {
        const nextMonth = new Date(instance.currentYear, instance.currentMonth, 1);
        renderTimeSlots(); // при смене месяца сбрасываем слоты
        getDataFromMonth(nextMonth);
      },
      onChange: (dateStr) => {
        const saveDate = (dateStr) => {
          const date = new Date(dateStr[0]);
          return date;
        };

        const inputDate = saveDate(dateStr);
        const formatDate = inputDate.toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'long'
        });

         if(bookingWidgetDate && dateStr) {
          bookingWidgetDate.textContent = formatDate ;
         };

        if (flag) {
          let activeTime;
          let id;

          if (selectDateContainer.querySelector('input:checked')) {
            activeTime = selectDateContainer.querySelector('input:checked').closest('[data-time="slot"]');
            id = activeTime.dataset.timeId;
          }

          selectDateContainer.innerHTML = '';
          renderTimeSlots();

          if (activeTime && !selectDateContainer.querySelector(`[data-time-id="${id}"]`).hasAttribute('disabled')) {
            dataCalendarContainer.querySelector(`[data-time-id="${id}"] input`).checked = true;
          }

          flag = false;
        }

        if (!breakpoint.matches && window.accordions) {
          window.accordions.updateAccordionsHeight?.();
        }
      },
    });

    const dataPost = {
        'object': idBathChecked,
        'date':inputDate,
        'time': time,
        'guest': {
            'adult': adultValue,
            'child': childValue,
            'baby': babyValue
          }
    };

    try {
        const response =  await fetch(`${BASE_URL}/check`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(dataPost)
        });

        const data = response.json();

        if(data.error === null) {
          console.log('Второй этап');
        } else {
          console.log('Moдальное окно');
        }

    } catch(error) {
      console.error(`Ошибка: ${error}`)
    }
  };

  (function sendData () {
    const buttonSend = document.querySelector('.booking-widget__desktop');
    const form = document.querySelector('form');

    const adultsWidget = document.querySelector('div[data-widget="adults"] span');
    const childrenWidget = document.querySelector('div[data-widget="child"] span');
    const bookingWidgetDate = document.querySelector('.booking-widget__date');
    const bookingWidgetTime = document.querySelector('.booking-widget__time');

    const dataBath = document.querySelector('[data-widget="bath"]');
    const dataBathName = dataBath.textContent;

   const result = loadBath();
   const bathes = result.data;

   if (bathes) {
    const names = bathes.map((bath) => bath.name);
    return names;
   };

   if (names && names.includes(dataBathName)) {
    return true;
   };
   const flag = isActiveButtonSend();

   if (flag === true) {
     buttonSend.disabled = false;
   };

   buttonSend.addEventListener('click', (evt) => {
    evt.preventDefault();

     if(flag) {
       handleSubmitCheckBath();
     };
   });
  })();

})();

