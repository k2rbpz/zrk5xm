const titleDisplay = document.getElementById('titleDisplay')
const bodyDisplay = document.getElementById('bodyDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

function displayText() {
  const text = generateText(12)
  titleDisplay.innerText = text
  bodyDisplay.innerText = text
}

// window.onload = displayPW()

setInterval(displayText,200)

function generateText(characterAmount) {
  let charCodes = LOWERCASE_CHAR_CODES.concat(
    UPPERCASE_CHAR_CODES).concat(
    UPPERCASE_CHAR_CODES).concat(
    SYMBOL_CHAR_CODES).concat(
    NUMBER_CHAR_CODES)
  
  const textCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    textCharacters.push(String.fromCharCode(characterCode))
  }
  return textCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}