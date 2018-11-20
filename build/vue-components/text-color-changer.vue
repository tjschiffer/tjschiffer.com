<template>
  <div class="color-changer__text" v-bind:style="textColor">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'text-color-changer',
    computed: {
      textColor() {
        return { color: this.$store.state.color }
      }
    }
  }
</script>
