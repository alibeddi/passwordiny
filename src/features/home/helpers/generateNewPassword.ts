import { IParam } from '../store/passwordSlice';

const arrayFromLowToHigh = (low: number, high: number) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

const randomNUM = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const shuffleArray = (array: string[]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = randomNUM(currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const generateNewPassword = (length: number, param: IParam) => {
  let passwordCharacters: string[] = [];
  let characterCodes: number[] = [];
  if (param.uppLetters) {
    characterCodes = characterCodes.concat(UPPERCASE_CHAR_CODES);
    const characterCode =
      UPPERCASE_CHAR_CODES[randomNUM(UPPERCASE_CHAR_CODES.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  if (param.lowLetters) {
    characterCodes = characterCodes.concat(LOWERCASE_CHAR_CODES);
    const characterCode =
      LOWERCASE_CHAR_CODES[randomNUM(LOWERCASE_CHAR_CODES.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  if (param.numbers) {
    characterCodes = characterCodes.concat(NUMBER_CHAR_CODES);
    const characterCode =
      NUMBER_CHAR_CODES[randomNUM(NUMBER_CHAR_CODES.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  if (param.symbols) {
    characterCodes = characterCodes.concat(SYMBOL_CHAR_CODES);
    const characterCode =
      SYMBOL_CHAR_CODES[randomNUM(SYMBOL_CHAR_CODES.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }

  const startAmount = passwordCharacters.length;

  for (let i = startAmount; i < length; i++) {
    const characterCode = characterCodes[randomNUM(characterCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }

  passwordCharacters = shuffleArray(passwordCharacters);
  if (length < 4) passwordCharacters = passwordCharacters.slice(0, length);

  return passwordCharacters.join('');
};
