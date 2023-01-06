<template>
  <div class="first-screen">
    <img src="/img/adventure.svg" alt="A man and the globe" width="162" height="116">
    <h2 class="first-screen__title">Welcome to country quiz</h2>
    <AppButton @click="gameStore.setActiveScreen('QUESTION_ONE')">Start</AppButton>
  </div>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue';
import { useGameStore } from '@/stores/GameStore';

const gameStore = useGameStore();

const loadCountries = () => {
  gameStore.getCountries();
};
loadCountries();
</script>

<style lang="scss" scoped>
  .first-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    img {
      margin-bottom: 30px;
    }

    &__title {
      font: 700 24px/36px var(--poppins);
      color: var(--violet);
      margin: 0 0 50px;
    }
  }

  @media (max-width: 520px) {
    .first-screen__title {
      font-size: 20px;
    }
  }
</style>