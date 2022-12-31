import { defineStore } from 'pinia';

const URL = 'https://restcountries.com/v3.1/';
const countriesInLocalStorage = localStorage.getItem("countries");

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    activeScreen: 'WELCOME', // QUESTION_ONE | WELCOME | RESULTS
    countries: [],
    rightAnswers: 0
  }),
  actions: {
    async getCountries() {
      if (countriesInLocalStorage) {
        this.countries = JSON.parse(countriesInLocalStorage);
        return;
      }
      const res = await fetch(`${URL}all`);
      const data = await res.json();

      this.countries = data.map(item => {
        return {
          name: item.name.common,
          capital: item.capital,
          flag: item.flags.svg
        };
      });

      localStorage.setItem("countries", JSON.stringify(this.countries));
    },
    setActiveScreen(id) {
      this.activeScreen = id;
    },
    setRightAnswers(value) {
      this.rightAnswers = value;
    }
  },
})
