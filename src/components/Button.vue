<template>
  <button
    class="button"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss" scoped>
.button {
  height: 40px;
  width: 180px;
  padding: 0;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border: 1px solid #efefef;
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  color: #2c3e50;
  font-size: 16px;
  font-weight: 400;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-style: normal;
  letter-spacing: 0.05em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:hover {
    background-color: #f0f0f0;
  }
}
</style>
