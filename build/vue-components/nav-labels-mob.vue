<template>
  <div class="position-relative height-100 overflow-hidden">
    <div
      class="height-100 position-relative transition-top-0-25s"
      :style="top"
    >
      <div
        v-for="sectionTitle in navSections"
        :key="sectionTitle"
        class="height-100 flex flex--align-center flex--justify-center font-size-1-2em"
      >
        <div>{{ sectionTitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavLabelMob',
  computed: {
    navSections () {
      return this.$store.state.sections
    },
    top () {
      const currentSection = this.$store.state.currentSection
      let sectionNumber = this.$store.state.sections.indexOf(currentSection)
      if (sectionNumber === -1) {
        sectionNumber = 0
      }
      return {
        top: sectionNumber * -100 + '%'
      }
    }
  }
}
</script>
