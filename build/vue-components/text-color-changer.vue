<template>
  <div class="color-changer__text" v-bind:style="textColor">
    <slot></slot>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'text-color-changer',
    computed: {
      ...mapState(['color']),
      textColor() {
        return { color: this.color }
      }
    }
  }
</script>
