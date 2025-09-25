// script.js
// Function to get real-time values of humidity and temperature
async function getRealTimeValues() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=7.0252&lon=79.9011&appid=49a44f166192449f94d64127252509'); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        const humidity = data.main.humidity;
        const temperature = data.temperature;

        // Update the UI with the fetched values
        document.querySelector('.humidity').textContent = `Humidity: ${humidity}%`;
        document.querySelector('.temperature').textContent = `Temperature: ${temperature}°C`;
    } catch (error) {
        console.error('Error fetching real-time values:', error);
    }
}

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


