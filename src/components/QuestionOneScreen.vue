<template>
  <div class="question-screen">
    <img class="question-screen__img" src="/img/adventure.svg" alt="Winners" width="162" height="116">
    <h2 class="question-screen__title">{{ questionCountries[0].capital[0] }} is the capital of</h2>
    <ul class="answers">
      <li class="answers__item" v-for="country in questionCountries" :key="country.name">
        <button class="answers__btn answers__btn--default" type="button">{{ country.name }}</button>
      </li>
    </ul>
    <AppButton class="question-screen__next-btn">Next</AppButton>
  </div>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue';
import { useGameStore } from '@/stores/GameStore';

const gameStore = useGameStore();
const getRandomCountries = () => {
  const randomIndexes = new Set();
  while (randomIndexes.size < 4) {
    const newIdx = Math.floor(Math.random() * gameStore.countries.length);
    randomIndexes.add(newIdx);
  }

  const result = [];
  for (let idx of randomIndexes.values()) {
    result.push(gameStore.countries[idx]);
  }

  return result;
};
const questionCountries = getRandomCountries();
</script>

<style lang="scss" scoped>
.question-screen {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  flex-grow: 1;

  &__title {
    margin: 0 0 32px;
    font: 700 24px/36px var(--poppins);
    color: var(--violet);
  }

  &__img {
    position: absolute;
    right: 0;
    top: -77px;
  }

  &__next-btn {
    align-self: flex-end;
  }
}

.answers {
  width: 100%;
  margin: 0;
  padding: 0 0 24px;
  list-style: none;
  counter-reset: answers;

  &__item {
    &:not(:last-child) {
      margin-bottom: 31px;
    }
  }

  &__btn {
    position: relative;
    width: 100%;
    padding: 12px 56px 13px 82px;
    counter-increment: answers;
    text-align: left;
    background: none;
    border: 2px solid var(--violet-light);
    border-radius: 12px;
    font: 500 18px/27px var(--poppins);
    cursor: pointer;
    color: var(--violet-light);
    transition: all .2s;


    &::before {
      content: counter(answers, upper-alpha);
      display: block;
      position: absolute;
      top: calc(50% - 12px);
      left: 19px;
      font-size: 24px;
      line-height: 1;
      height: 24px;
      padding-right: 45px;
    }

    &--default {
      &:hover {
        background-color: #fab23e;
        border-color: #fab23e;
        color: #ffffff;

        &::before {
          color: #ffffff;
        }
      }

      &:active {
        background-color: #e59b22;
        border-color: #e59b22;
        transition: none;
      }
    }

    &--wrong {
      color: #ffffff;
      background-color: var(--red);
      border-color: var(--red);

      &::after {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        border: 2px solid #ffffff;
        position: absolute;
        right: 18px;
        top: calc(50% - 10px);
        border-radius: 100%;
        background: url('/img/cross.svg') no-repeat center / 14px;
      }
    }

    &--success {
      color: #ffffff;
      background-color: var(--green);
      border-color: var(--green);

      &::after {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        border: 2px solid #ffffff;
        position: absolute;
        right: 18px;
        top: calc(50% - 10px);
        border-radius: 100%;
        background: url('/img/tick.svg') no-repeat center / 14px;
      }
    }
  }
}
</style>