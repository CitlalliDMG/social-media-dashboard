const root = document.documentElement;
const body = document.querySelector('body')
const checkbox = document.querySelector('#checkbox')
const slider = document.querySelector('.slider')

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  checkbox.setAttribute('checked', true)
}

checkbox.addEventListener('change', event => {
  if(event.target.checked) {
    body.classList.remove('light-mode')
    body.classList.add('dark-mode')
    slider.classList.remove('light-mode')
    slider.classList.add('dark-mode')
  } else {
    body.classList.remove('dark-mode')
    body.classList.add('light-mode')
    slider.classList.remove('dark-mode')
    slider.classList.add('light-mode')
  }
})