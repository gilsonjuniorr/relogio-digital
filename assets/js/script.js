const hour = document.querySelector('#hour')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds');

function getHour() {
    const objDate = new Date();
    let currentHour = objDate.getHours();
    let currentMinutes = objDate.getMinutes();
    let currentSeconds = objDate.getSeconds();

    currentHour = (currentHour < 10) ? '0' + currentHour : currentHour;
    currentMinutes = (currentMinutes < 10) ? '0' + currentMinutes : currentMinutes;
    currentSeconds = (currentSeconds < 10) ? '0' + currentSeconds : currentSeconds;

    hour.innerHTML = currentHour;
    minutes.innerHTML = currentMinutes;
    seconds.innerHTML = currentSeconds;
}

const time = setInterval(getHour, 1000);
