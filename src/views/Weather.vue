<script>

export default {
  data() {
    return {
      weather: null,
      weatherImage: '',
    };
  },
  async created() {
    await this.fetchWeather();
  },
  methods: {
    async fetchWeather() {
      try {
        const response = await fetch('https://www.el-tiempo.net/api/json/v2/home');
        const data = await response.json();
        const oviedoWeather = data.ciudades.find(city => city.name === 'Oviedo');
        this.weather = oviedoWeather;
        this.setWeatherImage(oviedoWeather.stateSky.description);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
    setWeatherImage(description) {
      switch (description.toLowerCase()) {
        case 'despejado':
          this.weatherImage = '/src/assets/img/sol.png';
          break;
        case 'poco nuboso':
          this.weatherImage = '/src/assets/img/dia-nublado.png';
          break;
        case 'nubes altas':
          this.weatherImage = '/src/assets/img/nubes.png';
          break;
        case 'intervalos nubosos con lluvia escasa':
          this.weatherImage = '/src/assets/img/clima.png';
          break;
        case 'muy nuboso con lluvia':
        case 'cubierto con lluvia':
          this.weatherImage = '/src/assets/img/lluvia.png';
          break;
        default:
          this.weatherImage = '/src/assets/img/clima.png'; // Imagen por defecto
      }
    },
  },
};

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
  background: linear-gradient(to bottom, #393e46 0%, #00f2fe 100%);
  color: #fff;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
