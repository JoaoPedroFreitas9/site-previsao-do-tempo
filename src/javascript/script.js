const cityInput = document.getElementById('city_name');
const searchForm = document.getElementById('search');

const weatherContainer = document.getElementById('weather');
const alertBox = document.getElementById('alert');

const title = document.getElementById('title');
const tempValue = document.getElementById('temp_value');
const tempDescription = document.getElementById('temp_description');

const tempMax = document.getElementById('temp_max');
const tempMin = document.getElementById('temp_min');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

const apiKey = '70a8461c6da1c2fd4475d42345aec8a3';

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        showError('Por favor, digite o nome de uma cidade.');
        return;
    }

    showWeatherData(city);
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    try {
        const response = await fetch(apiUrl);
        if (response.status === 404) {
            return null;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro na busca da API:", error);
        showError('Erro de conexão. Verifique sua rede.');
        return null;
    }
}

async function showWeatherData(city) {
    const data = await getWeatherData(city);

    if (!data) {
        showError('Cidade não localizada. Verifique o nome e tente novamente.');
        return;
    }

    alertBox.style.display = 'none';
    weatherContainer.classList.add('show');

    title.textContent = `${data.name}, ${data.sys.country}`;
    tempValue.innerHTML = `${Math.round(data.main.temp)} <sup>C°</sup>`;
    tempDescription.textContent = data.weather[0].description;
    tempMax.innerHTML = `${Math.round(data.main.temp_max)} <sup>C°</sup>`;
    tempMin.innerHTML = `${Math.round(data.main.temp_min)} <sup>C°</sup>`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} km/h`;
}

function showError(message) {
    weatherContainer.classList.remove('show');
    alertBox.style.display = 'block';
    alertBox.textContent = message;
}