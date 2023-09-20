document.addEventListener('DOMContentLoaded', () => {
  const doctors = document.querySelectorAll('.doctor .doctor__btn');
  const modal = document.querySelectorAll('.modal');
  const modalOverlay = document.querySelectorAll('.modal__overlay');
  const modalCloseBtn = document.querySelectorAll('.modal .modal__close');

  doctors.forEach((e) => {
    e.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      modal.forEach((e) => {
        if (e.dataset.id === id) {
          e.classList.add('active');
        }
      });
      document.body.style.overflow = 'hidden';
    });
  });

  modalCloseBtn.forEach((b) => {
    b.addEventListener('click', (e) => {
      e.target.closest('.active').classList.remove('active');
      document.body.style.overflow = 'unset';
    });
  });

  modalOverlay.forEach((m) => {
    m.addEventListener('click', (e) => {
      if (e.target.closest('.modal__content')) return;

      e.target.closest('.active').classList.remove('active');
      document.body.style.overflow = 'unset';
    });
  });

  modalOverlay.forEach((m) => {
    m.addEventListener('wheel', (e) => {
      e.stopPropagation();
    });
  });
});
