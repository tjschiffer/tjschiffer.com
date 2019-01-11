import reactManager from './reactManager'

window.onload = () => {
  reactManager.initialize();
}


// let initialBody = null;
//
// // The following handles switching in between the two frameworks
// // and there fore must be written outside the framework
// const frameworkState = {
//   'currentFramework': 'Vue', // default to vue,
//   'otherFramework': 'React'
// }
// const updateFramework = async (newFramework) => {
//   if (frameworkState.currentFramework !== newFramework) {
//     frameworkState.otherFramework = frameworkState.currentFramework
//     frameworkState.currentFramework = newFramework
//     const currentFrameworkManager = await import('./' + frameworkState.currentFramework.toLowerCase() + 'Manager')
//     currentFrameworkManager.default.destroy();
//     if (initialBody) {
//       document.body.innerHTML = initialBody
//     }
//   }
//
//   // Dynamic load the framework
//   import('./' + newFramework.toLowerCase() + 'Manager').then(frameworkManager => {
//     frameworkManager.default.initialize()
//   })
//
//   for (let key in frameworkState) {
//     const textToUpdate = document.getElementById(key)
//     if (textToUpdate) {
//       textToUpdate.innerText = frameworkState[key]
//     }
//   }
// }
//
// window.onload = () => {
//   initialBody = document.body.innerHTML; // Cache the html of the body since
//   updateFramework(frameworkState.currentFramework) // load the default framework on load
// }
//
// // put the function on the window so any framework can access it
// window.updateFramework = updateFramework
