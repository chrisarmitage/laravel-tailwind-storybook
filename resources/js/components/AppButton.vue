<template>
  <button @click="$emit('click')"><slot></slot></button>
</template>

<script>
  export default {
    name: "AppButton"
  }
</script>

<style scoped>

</style>