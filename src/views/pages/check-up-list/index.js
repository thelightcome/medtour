document.addEventListener('DOMContentLoaded', () => {
  const clinicBtns = document.body.querySelectorAll('.check-up-list__item')

  clinicBtns.forEach((cl) => {
    cl.addEventListener('click', (e) => {
      const active = document.body.querySelector('.check-up-list__item--active')
      if (active) active.classList.remove('check-up-list__item--active')
      e.target.classList.add('check-up-list__item--active')

      const activeBody = document.body.querySelector('.check-clinic--active')
      if (activeBody) activeBody.classList.remove('check-clinic--active')
      const targetBody = document.body.querySelector('.check-clinic[data-id="' + e.target.dataset.id + '"]')
      if (targetBody) {
        targetBody.classList.add('check-clinic--active')
        const firstBodyChild = targetBody.querySelector('.check-clinic__body')
        if (firstBodyChild) firstBodyChild.classList.add('check-clinic__body--active')
      }
    })
  })

  const dropDowns = document.body.querySelectorAll('.check-clinic__body')

  dropDowns.forEach((dd) => {
    dd.addEventListener('click', (elem) => {
      const header = elem.target.closest('.check-clinic__header')

      if (header) {
        dd.classList.toggle('check-clinic__body--active')
      }
    })
  })
})