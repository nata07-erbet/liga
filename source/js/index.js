(function bookingBath() {
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal--call');
    modal.classList.add('visually-hidden');

    const buttons = document.querySelectorAll('[data-open-modal="call"]');
    Array.from(buttons).forEach((button) => button.addEventListener('click', function() {
      window.location.href = '/booking.html';
    }));
  });
})();
