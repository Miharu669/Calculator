<script setup>
import { ref, onMounted } from 'vue';

const weather = ref(null);
const weatherImage = ref('');

const fetchWeather = async () => {
  try {
    const response = await fetch('https://www.el-tiempo.net/api/json/v2/home');
    const data = await response.json();
    const oviedoWeather = data.ciudades.find(city => city.name === 'Oviedo');
    weather.value = oviedoWeather;
    setWeatherImage(oviedoWeather.stateSky.description);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

const setWeatherImage = (description) => {
  switch (description.toLowerCase()) {
    case 'despejado':
      weatherImage.value = '/src/assets/img/sol.png';
      break;
    case 'poco nuboso':
      weatherImage.value = '/src/assets/img/dia-nublado.png';
      break;
    case 'nubes altas':
      weatherImage.value = '/src/assets/img/nubes.png';
      break;
    case 'intervalos nubosos con lluvia escasa':
      weatherImage.value = '/src/assets/img/clima.png';
      break;
    case 'muy nuboso con lluvia':
    case 'cubierto con lluvia':
      weatherImage.value = '/src/assets/img/lluvia.png';
      break;
    default:
      weatherImage.value = '/src/assets/img/clima.png'; 
  }
};

onMounted(async () => {
  await fetchWeather();
});
</script>

<template>
  <div class="weather-app">
    <h1>Weather in Oviedo</h1>
    <div v-if="weather" class="weather-info">
      <img :src="weatherImage" :alt="weather.stateSky.description" />
      <div class="weather-details">
        <p>{{ weather.name }}</p>
        <p>{{ weather.nameProvince }}</p>
        <p>Sky State: {{ weather.stateSky.description }}</p>
        <p>Temperature Min: {{ weather.temperatures.min }}°C</p>
        <p>Temperature Max: {{ weather.temperatures.max }}°C</p>
      </div>
    </div>
    <div v-else class="loading">
      <p>Loading...</p>
    </div>
  </div>

</template>


<style scoped>
.weather-app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
  color: #fff;
  /* background: linear-gradient(to bottom, #393e46 0%, #00f2fe 100%);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.3px);
  -webkit-backdrop-filter: blur(2.3px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  max-width: 400px;
  margin: 0 auto;
  margin-top:10%;
}

h1 {
  font-size: 2em;
  margin-bottom: 1em;
}

.weather-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-details {
  text-align: left;
}

p {
  font-size: 1.2em;
  margin: 0.5em 0;
}

img {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.loading p {
  font-size: 1.5em;
}
@media only screen and (max-width: 500px) {
  .weather-app {
  margin-top:55%;
  width: 90%;
}
}
</style>
