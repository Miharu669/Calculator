
<script setup>
import { ref, reactive } from 'vue';

const amount = ref(null);
const fromCurrency = ref('USD');
const toCurrency = ref('EUR');
const currencies = ['USD', 'EUR', 'YEN', 'HNL'];

const exchangeRates = reactive({
  USD: { USD: 1, EUR: 0.93, YEN: 157.56, HNL: 24.85 },
  EUR: { USD: 1.07, EUR: 1, YEN: 168.61, HNL: 26.60 },
  YEN: { USD: 0.0063, EUR: 0.0059, YEN: 1, HNL: 0.16 },
  HNL: { USD: 0.040, EUR: 0.038, YEN: 6.34, HNL: 1 }
});

const result = ref(null);

const convert = () => {
  if (amount.value && fromCurrency.value && toCurrency.value) {
    const rate = exchangeRates[fromCurrency.value][toCurrency.value];
    result.value = (amount.value * rate).toFixed(2);
  }
};
</script>
<template>

  <div id="app">
    <div class="converter">
      <h1>Converter</h1>
      <div class="input-section">
        <input type="number" v-model="amount" placeholder="Enter amount" />
        <select v-model="fromCurrency">
          <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>
      </div>
      <div class="output-section">
        <select v-model="toCurrency">
          <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
        </select>
        <button @click="convert">Convert</button>
      </div>
      <div class="result" v-if="result !== null">
        <p>{{ amount }} {{ fromCurrency }} = {{ result }} {{ toCurrency }}</p>
      </div>
    </div>
  </div>

</template>
<style scoped>

.converter {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  /* background: #b4b4b8;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); */
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.3px);
  -webkit-backdrop-filter: blur(2.3px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-top:10%;
}

h1 {
  margin-bottom: 20px;
  color:white;
  text-shadow: 0 0 5px #222831;
}

.input-section, .output-section {
  margin-bottom: 20px;
}

input, select, button {
  padding: 10px;
  margin: 5px;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  background: #ffd369;
  color: #222831;
  cursor: pointer;
}

button:hover {
  background: white;
  color: black;
}

.result {
  font-size: 1.5em;
  margin-top: 20px;
  color:white;
  text-shadow: 0 0 5px #00ccf0;
  

}
@media only screen and (max-width: 500px) {
  .converter {
  margin-top:55%;
  width: 90%;
}
}
</style>