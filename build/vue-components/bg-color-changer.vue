<template>
  <div
    class="color-changer__bg"
    :style="bgc"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BgColorChanger',
  computed: {
    bgc () {
      return { backgroundColor: this.$store.state.color }
    }
  }
}
</script>
