<template>
  <div
    class="color-changer__text"
    :style="textColor"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TextColorChanger',
  computed: {
    textColor () {
      return { color: this.$store.state.color }
    }
  }
}
</script>
