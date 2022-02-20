// const preferences = {
//     fontSize: '18px',
//     favColor: 'purple'
// }

// localStorage.setItem('preferences', JSON.stringify(preferences))

// const { favColor } = JSON.parse(localStorage.preferences);

// document.body.style.backgroundColor = favColor
const toggleSwitch = document.querySelector('input[type="checkbox"]')

toggleSwitch.addEventListener('click', function(e){
    const { checked } = toggleSwitch;

    document.body.className = checked ? 'dark' : ''
    localStorage.setItem('darkModeEnabled', checked)
})