<template>
  <div v-show="level !== ''">
    <p v-show="level === 'good'" ref="good">good</p>
    <p v-show="level === 'veryGood'" ref="veryGood">very good</p>
    <p v-show="level === 'excellent'" ref="excellent">excellent</p>
  </div>
</template>

<script>
export default {
  name: 'Level',
  props: {
    level: {
      type: String,
      default: '',
      validator: value =>
        ['', 'good', 'veryGood', 'excellent'].indexOf(value) !== -1
    }
  }
};
</script>

<style></style>
