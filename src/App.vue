<template>
  <div class="app-container">
    <h1 class="app-title">Country quiz</h1>
    <main class="app-main">
      <component :is="currentScreen"></component>
    </main>
  </div>
  <app-footer></app-footer>
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue';
import FirstScreen from '@/components/FirstScreen.vue';
import QuestionOneScreen from '@/components/QuestionOneScreen.vue';
import ResultsScreen from '@/components/ResultsScreen.vue';
import { useGameStore } from './stores/GameStore';
import { computed } from 'vue';

const gameStore = useGameStore();

const currentScreen = computed(() => {
  switch (gameStore.activeScreen) {
    case 'QUESTION_ONE':
      return QuestionOneScreen;
    case 'RESULTS':
      return ResultsScreen;
    case 'WELCOME':
    default:
      return FirstScreen;
  }
});
</script>

<style lang="scss" scoped>
.app-container {
  margin: auto;
  width: 464px;
}
.app-title {
  margin: 40px 0 10px;
  font: 700 36px/54px var(--poppins);
  text-transform: uppercase;
  color: #ffffff;

}
.app-main {
  width: 100%;
  padding: 50px 32px 32px;
  margin-bottom: 29px;
  background-color: #ffffff;
  border-radius: 24px;
  display: flex;
  position: relative;
}

@media (max-width: 520px) {
  .app-container {
    width: auto;
  }
  .app-title {
    font-size: 24px;
  }
}
</style>
