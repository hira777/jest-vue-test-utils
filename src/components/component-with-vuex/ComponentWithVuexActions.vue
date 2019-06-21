<template>
  <div>
    <button class="dispatch" @click="handleDispatch">
      Dispatch
    </button>
  </div>
</template>

<script>
export default {
  name: 'ComponentWithVuexActions',

  methods: {
    handleDispatch() {
      this.$store.dispatch('testAction', { msg: 'Test Dispatch' });
    }
  }
};
</script>
