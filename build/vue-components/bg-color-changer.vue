<template>
  <div class="color-changer__bg" v-bind:style="bgc">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'bg-color-changer',
    computed: {
      bgc() {
        return { backgroundColor: this.$store.state.color }
      }
    }
  }
</script>
