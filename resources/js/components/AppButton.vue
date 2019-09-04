<template>
  <button
    @click="$emit('click')"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-16"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "AppButton"
  }
</script>

<style scoped>

</style>