
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.error-404-page__btn')

  button.addEventListener('click', () => {
    window.history.back()
  })
})