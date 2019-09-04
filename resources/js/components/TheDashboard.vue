<template>
  <div class="bg-white m-8 border rounded-lg p-4">
    <div class="my-2">
      <app-button @click="increment()">+1</app-button>
      <app-button @click="decrement()">-1</app-button>
    </div>
    <value-readout :value="value"></value-readout>
  </div>
</template>

<script>
  import AppButton from "./AppButton";
  import ValueReadout from "./ValueReadout";
  export default {
    name: "TheDashboard",
    components: {ValueReadout, AppButton},
    computed: {
      value() {
        return this.$store.state.value;
      }
    },
    methods: {
      increment() {
        this.$store.dispatch('incrementValue');
      },

      decrement() {
        this.$store.dispatch('decrementValue');
      }
    }
  }
</script>

<style scoped>

</style>