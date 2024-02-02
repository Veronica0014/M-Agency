// BURGER MENU ICON

const mobileBtn = document.getElementById('mobile-cta')
const nav = document.querySelector('nav')
const mobileBtnExit = document.getElementById('mobile-exit')

// When menu is clicked
mobileBtn.addEventListener('click', () => {
	nav.classList.add('menu-btn')
})

// When exit is clicked
mobileBtnExit.addEventListener('click', () => {
	nav.classList.remove('menu-btn')
})

// have a nice day par

const now = new Date()

const daysOfWeek = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'Czwartek', 'piątku', 'sobota']
const dayOfWeek = daysOfWeek[now.getDay()]

document.querySelector('.hello-change').innerHTML = `${dayOfWeek}`
