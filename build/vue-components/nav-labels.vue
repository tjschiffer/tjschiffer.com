<template>
  <div>
    <a
      v-for="sectionTitle in navSections"
      :key="sectionTitle"
      class="display-block cursor-pointer padding-vert-0-5em"
      :class="{ 'opacity-4': !isActive(sectionTitle) }"
      @click="scrollToSection(sectionTitle)"
    >
      {{ sectionTitle }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavLabels',
  computed: {
    navSections () {
      return this.$store.state.sections
    }
  },
  methods: {
    scrollToSection (sectionTitle) {
      this.$store.commit('scrollToSection', sectionTitle)
    },
    isActive (sectionTitle) {
      return this.$store.state.currentSection === sectionTitle
    }
  }
}
</script>
