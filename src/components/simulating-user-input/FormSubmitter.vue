<template>
  <div>
    <form v-if="asyncTest" @submit.prevent="handleSubmitAsync">
      <input v-model="username" data-username />
      <input type="submit" />
    </form>
    <form v-else @submit.prevent="handleSubmit">
      <input v-model="username" data-username />
      <input type="submit" />
    </form>

    <div v-if="submitted" class="message">
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSubmitter',
  data() {
    return {
      username: '',
      submitted: false,
      asyncTest: false
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
    },
    handleSubmitAsync() {
      return this.$http
        .get('/api/v1/register', { username: this.username })
        .then(() => {
          this.submitted = true;
        })
        .catch(e => {
          throw Error('Something went wrong', e);
        });
    }
  }
};
</script>
