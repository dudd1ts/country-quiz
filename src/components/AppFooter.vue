<template>
  <footer class="app-footer">
    created by <a class="app-footer__link" href="https://github.com/dudd1ts" target="_blank">Sergei Kondrashev</a> - devChallenges.io
  </footer>
</template>

<style lang="scss" scoped>
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