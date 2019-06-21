<template>
  <div>
    <div class="fullname">
      {{ fullname }}
    </div>
    <div class="fullnameUsingMapGetter">
      {{ fullnameUsingMapGetters }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ComponentWithVuexGetters',

  computed: {
    ...mapGetters(['fullnameUsingMapGetters']),
    fullname() {
      return this.$store.getters.fullname;
    }
  }
};
</script>
