let initialBody = null

// The following handles switching in between the two frameworks
// and there fore must be written outside of a framework
const frameworkState = {
  'currentFramework': 'Vue', // default to vue,
  'otherFramework': 'React'
}
const updateFramework = async (newFramework) => {
  if (frameworkState.currentFramework !== newFramework) {
    const currentFrameworkManager = await import('./' + frameworkState.currentFramework.toLowerCase() + 'Manager')
    currentFrameworkManager.default.destroy()
    if (initialBody) {
      document.body.innerHTML = initialBody
    }
    frameworkState.otherFramework = frameworkState.currentFramework
    frameworkState.currentFramework = newFramework
  }

  // Dynamic load the framework
  import('./' + newFramework.toLowerCase() + 'Manager').then(frameworkManager => {
    frameworkManager.default.initialize()
  })
}

window.onload = async () => {
  initialBody = document.body.innerHTML // Cache the html of the body since
  await updateFramework(frameworkState.currentFramework) // load the default framework on load
}

// put the function on the window so any framework can access it
window.updateFramework = updateFramework
