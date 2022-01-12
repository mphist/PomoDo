export default function capitalizeFirstLetter(str: string) {
  const words = str.split(' ')
  const newWords: string[] = []
  words.forEach((word) => {
    newWords.push(word[0].toUpperCase() + word.slice(1))
    newWords.push(' ')
  })
  return newWords
}
