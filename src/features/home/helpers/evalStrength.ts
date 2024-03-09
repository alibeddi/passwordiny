import { IParam } from '../store/passwordSlice';

export const evalStrength = (length: number, params: IParam) => {
  let evaledStr = 0;
  let strength = (length / 10) * 2;
  params.uppLetters && (strength *= 1.2);
  params.lowLetters && (strength *= 1.1);
  params.numbers && (strength *= 1.5);
  params.symbols && (strength *= 1.6);

  if (strength < 2) evaledStr = 1;
  else if (strength >= 2 && strength < 3) evaledStr = 2;
  else if (strength >= 3 && strength < 4) evaledStr = 3;
  else evaledStr = 4;

  return evaledStr;
};
