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

  &--default {
    background-color: var(--orange);
    color: #ffffff;
    border: none;
    padding: 14px 37px;
    border-radius: 12px;
    cursor: pointer;
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
}
</style>