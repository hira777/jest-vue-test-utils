<template>
  <div>
    <button class="commit" @click="handleCommit">
      Commit
    </button>
  </div>
</template>

<script>
export default {
  name: 'ComponentWithVuexMutaions',

  methods: {
    handleCommit() {
      this.$store.commit('testMutation', { msg: 'Test Commit' });
    }
  }
};
</script>
