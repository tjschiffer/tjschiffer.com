<template>
  <div>
    <a v-for="sectionTitle in navSections"
       class="display-block cursor-pointer padding-vert-0-5em"
       v-bind:class="{ 'opacity-4': !isActive(sectionTitle) }"
       v-on:click="scrollToSection(sectionTitle)">{{sectionTitle}}</a>
  </div>
</template>

<script>
  export default {
    name: 'nav-labels',
    computed: {
      navSections() {
        return this.$store.state.sections;
      }
    },
    methods: {
      scrollToSection(sectionTitle) {
        this.$store.commit('scrollToSection', sectionTitle);
      },
      isActive(sectionTitle) {
        return this.$store.state.currentSection === sectionTitle;
      },
    }
  }
</script>
