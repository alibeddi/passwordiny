import { render, screen, act } from '@testing-library/react';
import { setLength, setParams } from '../../../../store/passwordSlice';

import GenerateButton from '../GenerateButton';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';

describe('Button testing', () => {
  test('should render button', () => {
    render(
      <Provider store={store}>
        <GenerateButton />
      </Provider>
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  test('should  be disabled initialy', () => {
    render(
      <Provider store={store}>
        <GenerateButton />
      </Provider>
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
  });

  test('should be active after changin states', async () => {
    render(
      <Provider store={store}>
        <GenerateButton />
      </Provider>
    );

    await act(async () => {
      store.dispatch(setLength(8));
      store.dispatch(setParams('numbers'));
    });

    const btn = screen.getByRole('button');
    expect(btn).not.toBeDisabled();
  });
});
