<template>
  <div>
    <app-button @click="increment()">+1</app-button>
    <app-button @click="decrement()">-1</app-button>
    <value-readout :value="value"></value-readout>
  </div>
</template>

<script>
  import AppButton from "./AppButton";
  import ValueReadout from "./ValueReadout";
  export default {
    name: "TheDashboard",
    components: {ValueReadout, AppButton},
    data() {
      return {
        value: 10,
      }
    },
    methods: {
      increment() {
        this.value++;
      },

      decrement() {
        this.value--;
      }
    }
  }
</script>

<style scoped>

</style>