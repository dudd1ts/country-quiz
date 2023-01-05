<template>
  <div class="question-screen">
    <img class="question-screen__img" src="/img/adventure.svg" alt="A man and the globe" width="162" height="116">
    <h2 class="question-screen__title">{{ questionCountries[rightIdx].capital[0] }} is the capital of {{ gameStore.rightAnswers }}</h2>
    <ul class="answers">
      <li class="answers__item" v-for="country in questionCountries" :key="country.name">
        <button :class="[
                'answers__btn',
                {
                  'answers__btn--default': !isAnswered || (isAnswered && !country.isRight && !country.isClicked),
                  'answers__btn--success': isAnswered && country.isRight,
                  'answers__btn--wrong': isAnswered && !country.isRight && country.isClicked,
                  'answers__btn--disabled': isAnswered
                },
              ]" type="button" @click="onAnswerClick(country)">{{ country.name }} {{ country.isRight }}</button>
      </li>
    </ul>
    <AppButton class="question-screen__next-btn" v-if="isAnswered" @click="onNextClick">Next</AppButton>
  </div>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue';
import { ref } from "vue";
import { useGameStore } from '@/stores/GameStore';

const gameStore = useGameStore();
const isAnswered = ref(false);
const questionCondition = ref('WAITING'); // WAITING | WRONG_ANSWER | RIGHT_ANSWER
const questionCountries = ref([]);
const rightIdx = ref(0);

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomCountries = () => {
  const randomIndexes = new Set();
  while (randomIndexes.size < 4) {
    const newIdx = getRandomNumber(gameStore.countries.length);
    randomIndexes.add(newIdx);
  }

  const result = [];
  for (let idx of randomIndexes.values()) {
    const newLength = result.push(gameStore.countries[idx]);
    result[newLength - 1].isClicked = false;
    result[newLength - 1].isRight = false;
  }

  return result;
};

const initQuestion = () => {
  questionCountries.value = getRandomCountries();
  rightIdx.value = getRandomNumber(questionCountries.value.length);
  questionCountries.value[rightIdx.value].isRight = true;
};
initQuestion();

const onAnswerClick = (country) => {
  country.isClicked = true;
  isAnswered.value = true;
  if (country.isRight) {
    questionCondition.value = 'RIGHT_ANSWER';
    gameStore.setRightAnswers(gameStore.rightAnswers + 1);
  } else {
    questionCondition.value = 'WRONG_ANSWER';
  }
}

const onNextClick = () => {
  switch (questionCondition.value) {
    case 'RIGHT_ANSWER':
      questionCondition.value = 'WAITING';
      isAnswered.value = false;
      initQuestion();
      break;
    case 'WRONG_ANSWER':
      gameStore.setActiveScreen('RESULTS');
  }
}

</script>

<style lang="scss" scoped>
.question-screen {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  padding-top: 18px;
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

    &--disabled {
      pointer-events: none;
    }
  }
}
</style>