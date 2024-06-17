<!-- <template>
  <div>
      <form
          class="mx-auto w-full max-w-sm bg-white shadow rounded-md p-5 space-y-3 text-sm"
          @submit.prevent="submit"
      >
          <div class="flex items-center justify-between space-x-5">
              <label for="base_currency_input">Base currency:</label>
              <input
                  v-model="params.base_currency"
                  type="text"
                  class="border-slate-300 border rounded-md py-2 px-4 text-sm"
              />
          </div>
          <div class="flex items-center justify-between space-x-5">
              <label for="currencies">Target currencies:</label>
              <input
                  v-model="params.currencies"
                  type="text"
                  class="border-slate-300 border rounded-md py-2 px-4 text-sm"
              />
          </div>
          <button
              type="submit"
              class="bg-slate-800 text-white rounded-md py-2 px-4 mx-auto relative block"
          >Get Latest Rates</button>
      </form>
      <div
          v-if="results"
          class="mx-auto my-5 w-full max-w-sm bg-white shadow rounded-md px-5 py-3 text-sm divide-y divide-dotted divide-slate-300"
      >
          <div
              v-for="result of results"
              :key="result.code"
              class="flex items-center justify-between py-2"
          >
              <strong>{{ result.code }}</strong>
              <span>{{ result.value }}</span>
          </div>
      </div>
  </div>
</template>

<script>
import CurrencyAPI from '@everapi/currencyapi-js';

export default {
    name: 'CurrencyConverter',
    data () {
        return {
            params: {
                base_currency: 'USD',
                currencies: 'EUR,CAD'
            },
            results: null,
            currencyApi: new CurrencyAPI('YOUR-API-KEY')
        }
    },
    methods: {
        submit () {
            this.results = null;
            this.currencyApi.latest(this.params).then(response => {
                if (response.data) {
                    this.results = response.data;
                }
            });
        }
    }
}
</script> -->
<script>
export default {
  data() {
    return {
      amount: null,
      fromCurrency: 'USD',
      toCurrency: 'EUR',
      currencies: ['USD', 'EUR', 'YEN', 'HNL'],
      exchangeRates: {
        USD: { USD: 1, EUR: 0.93, YEN: 157.56, HNL: 24.85 },
        EUR: { USD: 1.07, EUR: 1, YEN: 168.61, HNL: 26.60 },
        YEN: { USD: 0.0063, EUR: 0.0059, YEN: 1, HNL: 0.16 },
        HNL: { USD: 0.040, EUR: 0.038, YEN: 6.34, HNL: 1 }
      },
      result: null
    };
  },
  methods: {
    convert() {
      if (this.amount && this.fromCurrency && this.toCurrency) {
        const rate = this.exchangeRates[this.fromCurrency][this.toCurrency];
        this.result = (this.amount * rate).toFixed(2);
      }
    }
  }
};
</script>
<template>
  <div id="app">
    <div class="converter">
      <h1>Currency Converter</h1>
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
  background: #b4b4b8;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 20px;
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
  color: white;
  cursor: pointer;
}

button:hover {
  background: white;
  color: black;
}

.result {
  font-size: 1.2em;
  margin-top: 20px;
}
</style>