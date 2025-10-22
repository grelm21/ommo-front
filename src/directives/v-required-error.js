export default {
  mounted(el) {
    const target = el

    let viewTarget = null
    if (target.classList.contains('hidden')) {
      viewTarget = target.parentNode
    } else {
      viewTarget = target
    }

    const showError = () => {
      viewTarget.classList.add('has-error')
      if (!viewTarget.querySelector('.error-message')) {
        const msg = document.createElement('p')
        msg.textContent = 'Заполните это поле'
        msg.className = 'error-message handjet-normal text-[20px]'
        viewTarget.insertAdjacentElement('afterend', msg)
      }
    }

    const clearError = () => {
      viewTarget.classList.remove('has-error')
      const msg = viewTarget.nextElementSibling
      if (msg?.classList.contains('error-message')) msg.remove()
    }

    target.addEventListener('invalid', (e) => {
      e.preventDefault()
      e.target.setCustomValidity('')
      showError()
    })

    target.addEventListener('input', () => {
      if (target.value.trim()) clearError()
    })
  },
}
