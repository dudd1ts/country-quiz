<template>
  <div class="first-screen">
    <img src="/img/adventure.svg" alt="Winners" width="162" height="116">
    <h2 class="first-screen__title">Kuala Lumpur is the capital of</h2>
  </div>
</template>

<script setup>
// import AppButton from '@/components/AppButton.vue';
</script>

<style lang="scss" scoped>
.first-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  &__title {
    font: 700 24px/36px var(--poppins);
    color: var(--violet-dark);
  }
}
</style>