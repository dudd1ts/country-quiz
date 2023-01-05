<template>
  <button :class="[
      'btn',
      {
        'btn--bordered': color === 'bordered',
        'btn--default': color === 'default'
      },
    ]"><slot /></button>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'default'
  }
});
</script>

<style lang="scss" scoped>
.btn {
  font: 700 18px/27px var(--poppins);
  transition: all .2s ease;
  cursor: pointer;
  border-radius: 12px;

  &--default {
    background-color: var(--orange);
    color: #ffffff;
    border: none;
    padding: 14px 37px;
    box-shadow: 0 2px 4px rgba(252, 168, 47, 0.4);

    &:hover {
      background-color: #fab23e;
      box-shadow: 0 4px 8px rgba(252, 168, 47, 0.4);
      transition: none;
    }

    &:active {
      box-shadow: 0 2px 4px rgba(252, 168, 47, 0.4);
      background-color: #e59b22;
    }
  }

  &--bordered {
    background: none;
    border: 2px solid var(--violet-dark);
    padding: 15px 59px;
    color: var(--violet-dark);

    &:hover {
      background-color: var(--violet-dark);
      color: #ffffff;
      transition: none;
    }

    &:active {
      background-color: #1d354b;
    }
  }
}
</style>