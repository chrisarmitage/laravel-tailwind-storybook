<template>
  <div class="">
    Value: <span class="font-bold">{{ value }}</span>
  </div>
</template>

<script>
  export default {
    name: "ValueReadout",
    props: {
      value: {
        type: Number,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>