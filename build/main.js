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

    const url = new URL(window.location.href)
    url.searchParams.set('currentFramework', newFramework)
    history.replaceState({}, document.title, '?' + url.searchParams.toString())
  }

  // Dynamic load the framework
  import('./' + newFramework.toLowerCase() + 'Manager').then(frameworkManager => {
    frameworkManager.default.initialize()
  })
}

window.onload = async () => {
  initialBody = document.body.innerHTML // Cache the html of the body since it will be modified by the frameworks
  var url = new URL(window.location.href)
  const frameworkFromUrl = url.searchParams.get('currentFramework')
  let currentFramework = frameworkState.currentFramework
  if (frameworkFromUrl && Object.values(frameworkState).indexOf(frameworkFromUrl) > -1) {
    currentFramework = frameworkFromUrl
  }

  await updateFramework(currentFramework) // load the default framework on load
}

// put the function on the window so any framework can access it
window.updateFramework = updateFramework
