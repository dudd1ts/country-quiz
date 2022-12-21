<template>
  <div class="app-container">
    <h1 class="app-header">Country quiz</h1>
    <main class="app-main">
      Lorem Ipsum
    </main>
  </div>
  <footer class="app-footer">
    created by <a class="app-footer__link" href="https://github.com/dudd1ts" target="_blank">Sergei Kondrashev</a> - devChallenges.io
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.app-container {
  margin: auto;
  width: 464px;
}
.app-header {
  text-transform: uppercase;
  color: #ffffff;
}
.app-main {
  width: 100%;
  background-color: #fff;
  border-radius: 24px;
}
.app-footer {
  margin: 0 auto;
  color: #ffffff;
  font: 500 14px/17px var(--montserrat);

  &__link {
    color: #ffffff;
    font-weight: 700;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
