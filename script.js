// script.js

// Function to toggle the switch state
function toggleSwitch() {
    const switchElement = document.querySelector('.switch');

    if (switchElement.classList.contains('on')) {
        switchElement.classList.remove('on');
        switchElement.style.backgroundColor = ''; // Default switch color
    } else {
        switchElement.classList.add('on');
        switchElement.style.backgroundColor = 'blue'; // Blue switch when turned on
    }
}

