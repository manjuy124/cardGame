export function getRandomNumbers(min = 1, max = 100, count = 6) {
    const randomNumbers = []
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
        randomNumbers.push(randomNumber)
    }
    return randomNumbers
}

export function shuffleArray(inputArray) {
    for (let i = inputArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
    }
}