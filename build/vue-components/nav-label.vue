<template>
  <a class="display-block cursor-pointer" v-bind:class="{ 'opacity-4': !isActive }" v-on:click="scrollToSection">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'nav-label',
    data() {
      return {
        sectionTitle: this.$slots.default[0].text.toLowerCase()
      }
    },
    computed: {
      isActive() {
        return this.$store.state.currentSection === this.sectionTitle;
      }
    },
    methods: {
      scrollToSection() {
        this.$store.commit('scrollToSection', this.sectionTitle);
      }
    }
  }
</script>
