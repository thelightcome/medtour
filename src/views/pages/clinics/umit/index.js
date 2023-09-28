document.addEventListener('DOMContentLoaded', () => {
  const doctors = document.querySelectorAll('.doctor .doctor__btn')
  const modal = document.querySelector('.modal')
  const modalOverlay = document.querySelector('.modal__overlay')
  const modalCloseBtn = document.querySelector('.modal .modal__close')
  
  doctors.forEach((e) => {
    e.addEventListener('click', () => {
      modal.classList.add('active')
      document.body.style.overflow = 'hidden'
    })
  })

  modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('active')
    document.body.style.overflow = 'unset'
  })

  modalOverlay.addEventListener('click', (e) => {
    if (e.target.closest('.modal__content')) return

    modal.classList.remove('active')
  })

  modalOverlay.addEventListener('wheel', (e) => {
    e.stopPropagation()
  })
})
