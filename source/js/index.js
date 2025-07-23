(function bookingBath() {
  console.log('bookingBath script loaded');
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-open-modal="call"]');

    Array.from(buttons).forEach((button) => button.addEventListener('click', function() {
      window.location.href = '/booking.html';
    }));
  });
})();
