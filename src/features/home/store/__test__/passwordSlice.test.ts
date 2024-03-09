import { store } from '../store';

import { setLength, setParams, generatePassword } from '../passwordSlice';

describe('password slice testing', () => {
  test('should have right initial state', () => {
    const password = store.getState().password.password;
    const length = store.getState().password.length;
    const uppLetters = store.getState().password.param.uppLetters;
    const lowLetters = store.getState().password.param.lowLetters;
    const numbers = store.getState().password.param.numbers;
    const symbols = store.getState().password.param.symbols;

    expect(password).toBeNull();
    expect(length).toEqual(0);
    expect(uppLetters).toBeFalsy();
    expect(lowLetters).toBeFalsy();
    expect(numbers).toBeFalsy();
    expect(symbols).toBeFalsy();
  });
  test('should change leangth to 10', () => {
    store.dispatch(setLength(10));
    const length = store.getState().password.length;

    expect(length).toEqual(10);
  });
  test('should change params to true', async () => {
    store.dispatch(setParams('uppLetters'));
    store.dispatch(setParams('lowLetters'));
    store.dispatch(setParams('numbers'));
    store.dispatch(setParams('symbols'));

    const uppLetters = store.getState().password.param.uppLetters;
    const lowLetters = store.getState().password.param.lowLetters;
    const numbers = store.getState().password.param.numbers;
    const symbols = store.getState().password.param.symbols;

    expect(uppLetters).toBeTruthy();
    expect(lowLetters).toBeTruthy();
    expect(numbers).toBeTruthy();
    expect(symbols).toBeTruthy();
  });

  test('should generate password thats is not null', async () => {
    store.dispatch(setParams('uppLetters'));
    store.dispatch(setParams('lowLetters'));
    store.dispatch(setParams('numbers'));
    store.dispatch(setParams('symbols'));
    store.dispatch(setLength(10));
    store.dispatch(generatePassword());

    const password = store.getState().password.password;
    expect(password).not.toBeNull();
  });
});
