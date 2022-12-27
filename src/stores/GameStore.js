import { defineStore } from 'pinia';

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    screen: 'QUESTION_ONE' // QUESTION_ONE | WELCOME
  })
})
