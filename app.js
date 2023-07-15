import Alpine from 'alpinejs';

Alpine.directive(
    'uppercase', el => {
        console.log(el.textContent)
        el.textContent = el.textContent.toUpperCase()
    }
)

window.Alpine = Alpine
window.Alpine.start()