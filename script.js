const display = document.querySelector('.display')
const scalingKey = document.querySelector('.key.inst')

window.addEventListener('keydown', (e) => {
  display.innerHTML = `
    <div class="key">${e.key === ' ' ? 'Space' : e.key}
      <small>event.key</small>
    </div>
    <div class="key">${e.keyCode}
      <small>event.keyCode</small>
    </div>
    <div class="key">${e.code}
      <small>event.code</small>
    </div>`
})

window.addEventListener('keydown', () => {
  scalingKey.style.transform = 'scale(0.95)'
})

window.addEventListener('keyup', () => {
  scalingKey.style.transform = 'scale(1)'
})
