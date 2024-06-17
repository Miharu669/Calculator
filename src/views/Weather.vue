
 <template>
  <div>
    <h1>Weather in Oviedo</h1>
    <div v-if="weather">
      <img :src="weatherImage" :alt="weather.stateSky.description" />
      <p>Sky State: {{ weather.stateSky.description }}</p>
      <p>Temperature: {{ weather.temperatura_actual }}°C</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

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
          this.weatherImage = '/src/assets/img/clima.png';
          break;
        case 'poco nuboso':
          this.weatherImage = '/src/assets/img/clima.png';
          break;
        case 'nubes altas':
          this.weatherImage = '/src/assets/img/clima.png';
          break;
          case 'intervalos nubosos con lluvia escasa':
          this.weatherImage = '/src/assets/img/clima.png';
          break;
          case 'muy nuboso con lluvia':
          this.weatherImage = '/src/assets/img/clima.png';
          break;
        // Añade más casos según sea necesario
        default:
          this.weatherImage = '/src/assets/img/clima.png'; // Imagen por defecto
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

p {
  font-size: 1.2em;
}

img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}
</style>
