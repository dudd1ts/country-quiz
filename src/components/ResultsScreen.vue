<template>
  <div class="results-screen">
    <img src="/img/winners.svg" alt="Winners" width="238" height="136">
    <h2 class="results-screen__title">Results</h2>
    <p class="results-screen__text">You got <span class="results-screen__scores">{{ gameStore.rightAnswers }}</span> correct answers</p>
    <AppButton color="bordered" @click="resetGame">Try again</AppButton>
  </div>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue';
import { useGameStore } from '@/stores/GameStore';

const gameStore = useGameStore();

const resetGame = () => {
  gameStore.setRightAnswers(0);
  gameStore.setActiveScreen('WELCOME');
};
</script>

<style  lang="scss" scoped>
.results-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  img {
    margin-bottom: 72px;
  }

  &__title {
    font: 700 38px/72px var(--poppins);
    color: var(--violet-dark);
    margin: 0 0 15px;
  }

  &__text {
    font: 500 18px/27px var(--poppins);
    color: var(--violet-dark);
    margin: 0 0 70px;
  }

  &__scores {
    color: #6FCF97;
    font-weight: 700;
    font-size: 36px;
  }
}

@media (max-width: 520px) {
  .results-screen {
    img {
      margin-bottom: 35px;
    }
  }
}
</style>