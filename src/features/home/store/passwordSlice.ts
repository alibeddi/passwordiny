import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { evalStrength } from '../helpers/evalStrength';
import { generateNewPassword } from '../helpers/generateNewPassword';

export interface IParam {
  [uppLetters: string]: boolean;
  lowLetters: boolean;
  numbers: boolean;
  symbols: boolean;
}

interface IInitialState {
  password: null | string;
  param: IParam;
  length: number;
  strength: number;
}

const initialState: IInitialState = {
  password: null,
  length: 0,
  param: {
    uppLetters: false,
    lowLetters: false,
    numbers: false,
    symbols: false,
  },
  strength: 1,
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    generatePassword(state): void {
      state.password = generateNewPassword(state.length, state.param);
    },
    setParams(state, action: PayloadAction<string>) {
      state.param[action.payload] = !state.param[action.payload];
      state.strength = evalStrength(state.length, state.param);
    },
    setLength(state, action: PayloadAction<number>) {
      state.length = action.payload;
      state.strength = evalStrength(state.length, state.param);
    },
  },
});

export const { generatePassword, setParams, setLength } = passwordSlice.actions;
export const selectPassword = (state: RootState) => state.password.password;
export const selectParams = (state: RootState) => state.password.param;
export const selectLength = (state: RootState) => state.password.length;
export const selectStrength = (state: RootState) => state.password.strength;

export const passwordReducer = passwordSlice.reducer;
