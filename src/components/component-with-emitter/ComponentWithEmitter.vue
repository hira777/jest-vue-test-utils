<template>
  <div></div>
</template>

<script>
export default {
  name: 'ComponentWithEmitter',

  methods: {
    emitEvent() {
      this.$emit('myEvent', 'name', 'password');
    }
  }
};
</script>
