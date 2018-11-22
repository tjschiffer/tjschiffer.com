<template>
  <div v-bind:data-section="sectionTitle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'nav-section',
    props: { sectionTitle: String },
    created() {
      if (this.sectionTitle) {
        this.$store.commit('registerSection', this.sectionTitle);
      }
    },
    methods: {
      updateNavElement(direction) {
        const middleOfScreen = Math.floor(window.innerHeight / 2);
        const boundingClientRect = this.$el.getBoundingClientRect();
        const top = boundingClientRect.top;
        const bottom = boundingClientRect.bottom;

        // If the element is not within the middle of the page, don't update anything
        if (top > middleOfScreen || bottom < middleOfScreen) {
          return;
        }

        if (direction === 'down') {
          if (top < middleOfScreen) {
            this.$store.commit('updateCurrentSection', this.sectionTitle);
          }
        } else {
          if (bottom > middleOfScreen) {
            this.$store.commit('updateCurrentSection', this.sectionTitle);
          }
        }
      }
    }
  }
</script>
