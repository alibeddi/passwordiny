import { screen, render, act } from '@testing-library/react';
import {
  setLength,
  setParams,
  generatePassword,
} from '../../../store/passwordSlice';

import Display from '../Display';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

describe('Display component testing', () => {
  test('should render component', () => {
    render(
      <Provider store={store}>
        <Display />
      </Provider>
    );
    const password = screen.getByRole('heading', { level: 2 });
    expect(password).toBeInTheDocument();
  });

  test('should have default text', () => {
    render(
      <Provider store={store}>
        <Display />
      </Provider>
    );
    const password = screen.getByRole('heading', { level: 2 });
    expect(password).toHaveTextContent('P4$5W0rD!');
  });

  test('should have copyIcon', () => {
    render(
      <Provider store={store}>
        <Display />
      </Provider>
    );
    const icon = screen.getByTestId('copyIcon');

    expect(icon).toBeInTheDocument();
  });

  test('should not have default text after password generaton', async () => {
    render(
      <Provider store={store}>
        <Display />
      </Provider>
    );

    await act(async () => {
      store.dispatch(setLength(8));
      store.dispatch(setParams('numbers'));
      store.dispatch(generatePassword());
    });

    const password = screen.getByRole('heading', { level: 2 });
    expect(password).not.toHaveTextContent('P4$5W0rD!');
  });
});
