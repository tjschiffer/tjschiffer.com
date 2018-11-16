<template>
  <div class="color-changer__bg" v-bind:style="bgc">
    <slot></slot>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'bg-color-changer',
    computed: {
      ...mapState(['color']),
      bgc() {
        return { backgroundColor: this.color }
      }
    }
  }
</script>
