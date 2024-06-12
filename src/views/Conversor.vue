<template>
  <div id="app" class="container">
    <div class="row main-container mx-auto">
      <div class="row title-container no-gutters">
        <div class="col-10">
          <h1 class="title">Currency Converter</h1>
        </div>
        <div class="col-2">
          <select class="select-country" @change="updateInputs" v-model="selected">
            <option v-for="country in countries" :key="country.name">{{ country.name }}</option>
          </select>
        </div>
      </div>

      <div class="row">
        <!-- input field 1 -->
        <div class="col">
          <img class="country-flag" :src="imageSrc + 'flag-europe.png'" />
          <h2 class="country-name">Europe</h2>
          <p>Rate: 1 EUR</p>
          <input
            id="currencyInput"
            class="currency-input"
            @keyup="calcInput_1($event)"
            v-model="calc2"
          />
        </div>
        <!-- input field 2 -->
        <div class="col">
          <template v-for="country in countries" :key="country.name">
            <template v-if="selected === country.name">
              <img class="country-flag" :src="imageSrc + country.image" />
              <h2 class="country-name">{{ country.name }}</h2>
              <p class="">Rate: {{ country.rate }} EUR</p>
              <input
                class="currency-input"
                @keyup="calcInput_2"
                v-model="calc1"
              />
              <span>{{ country.money }}</span>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "USA",
      countryRate: 1.07,
      calc1: "",
      calc2: "",
      imageSrc: "",
      countries: [
        
        
        { name: "India", money: "INR", rate: 89.85, image: "flag-spain.png" },
        { name: "USA", money: "USD", rate: 1.07, image: "flag-usa.png" },
        { name: "Honduras", money: "HNL", rate: 26.58, image: "flag-new-zealand.png" },
        { name: "Japanese", money: "YEN", rate: 169, image: "flag-japan.png" }
      ]
    };
  },
  methods: {
    calcInput_1(e) {
      this.firstInputSelected = true;
      this.calculate(e);
    },
    calcInput_2(e) {
      this.firstInputSelected = false;
      this.calculate(e);
    },
    updateInputs() {
      const selectedCountry = this.countries.find(country => country.name === this.selected);
      if (selectedCountry) {
        this.countryRate = selectedCountry.rate;
      }
      const input2 = parseFloat(document.getElementById("currencyInput").value);
      if (isNaN(input2)) {
        this.calc2 = "";
        this.calc1 = "";
        return;
      }
      this.calc1 = (input2 * this.countryRate).toFixed(2);
    },
    calculate(e) {
      const value = parseFloat(e.target.value);
      if (isNaN(value)) {
        this.calc2 = "";
        this.calc1 = "";
        return;
      }
      if (this.firstInputSelected) {
        this.calc2 = value;
        this.calc1 = (value * this.countryRate).toFixed(2);
      } else {
        this.calc1 = value;
        this.calc2 = (value / this.countryRate).toFixed(2);
      }
    }
  }
};
</script>
<style scoped>
.container {
  background-color: beige;
  /* Your container styles */
}
.row {
  gap:10px
  /* Your row styles */
}
.title-container {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* Your title container styles */
}
.country-flag {
  width: 50px;
  height: auto;
}
.currency-input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
}
</style>

