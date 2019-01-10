/**
 * Deterministic function that creates a
 * non-grey dark color using minutes from the most recent hour.
 *
 * See https://www.wolframalpha.com/input/?i=sin(PI+*+x%2F30)%2F1.5+%2B+1%2F3,+sin(PI+*+x%2F30+%2B+PI+*++2+%2F+3)%2F1.5+%2B+1%2F3,+sin(PI+*+x%2F30+%2B+PI+*+4+%2F+3)%2F1.5+%2B+1%2F3
 * to understand how the shifted sin function is used to
 * create deep reds, greens, blues, and in-between colors.
 * (When the y value goes below 0, that value will be 0).
 *
 * @returns {string}
 */
export default () => {
  const currentTime = new Date()
  const seed = currentTime.getMinutes() + currentTime.getSeconds() / 60
  // Use shifted sin functions to create values between 0 and 50
  // These Sine functions have a period of 60 minutes
  return [
    n => Math.sin(n * Math.PI / 30),
    n => Math.sin(n * Math.PI / 30 + Math.PI * 2 / 3),
    n => Math.sin(n * Math.PI / 30 + Math.PI * 4 / 3)
  ].reduce((hexColor, func) => {
    // Use provided function to generate a value between 0 and 50
    const colorVal = Math.round(Math.max(func(seed) / 1.5 + 1 / 3, 0) * 50)
    // Add the number as a hex number making sure it's a padding two digit number
    hexColor = hexColor + ('0' + colorVal.toString(16)).slice(-2)
    return hexColor
  }, '#')
}
