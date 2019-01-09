<template>
  <div v-on:scroll.passive="navContentScroll">
    <slot></slot>
  </div>
</template>

<script>
  import { debounce } from "debounce"
  import { mapState } from "vuex"

  export default {
    name: 'nav-content',
    data() {
      return {
        scrollTop: 0,
        direction: 'down'
      }
    },
    created() {
      // Debounce scrolling update 10ms for performance
      this.debouncedUpdateNavElements = debounce(this.updateNavElements, 10);
    },
    computed: mapState(['scrollToSection']),
    methods: {
      navContentScroll() {
        const newScrollTop = this.$el.scrollTop;
        this.direction = newScrollTop < this.scrollTop ? 'up' : 'down';
        this.scrollTop = newScrollTop;
        this.debouncedUpdateNavElements();
      },
      updateNavElements() {
        this.$children.forEach(child => {
          if (typeof child.updateNavElement === 'function') {
            // This is not ideal. Vue has no way to emit events to child elements
            // and props would only work for elements within scope of this component.
            // The other option would be to use the Vuex store or parent state data to change
            // some state and have the children components watch that state change.
            child.updateNavElement(this.direction);
          }
        });
      }
    },
    watch: {
      scrollToSection(scrollToSection) {
        for (let child of this.$children) {
            // If a child element is found the section title indicated by the scroll to section
            if (child.sectionTitle === scrollToSection) {
                child.$el.scrollIntoView({behavior: "smooth", block: "center"});
                return;
            }
        }
      }
    }
  }
</script>
