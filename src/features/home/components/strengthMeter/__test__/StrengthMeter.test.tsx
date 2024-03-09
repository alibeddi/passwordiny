import { screen, render, act } from '@testing-library/react';

import { setLength } from '../../../store/passwordSlice';
import StrengthMeter from '../StrengthMeter';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

describe('StrengthMeter testing', () => {
  test('should render component', () => {
    render(
      <Provider store={store}>
        <StrengthMeter />
      </Provider>
    );
    const meter = screen.getByText(/strength/i);
    expect(meter).toBeInTheDocument();
  });

  test('should be a too weak strength initialy', () => {
    render(
      <Provider store={store}>
        <StrengthMeter />
      </Provider>
    );
    const meter = screen.getByText(/too weak/i);
    expect(meter).toBeInTheDocument();
  });

  test('should weak strength if strength level is 2', async () => {
    render(
      <Provider store={store}>
        <StrengthMeter />
      </Provider>
    );
    await act(async () => {
      store.dispatch(setLength(10));
    });
    const meter = screen.getByText(/weak/i);
    expect(meter).toBeInTheDocument();
  });
  test('should medium strength if strength level is 3', async () => {
    render(
      <Provider store={store}>
        <StrengthMeter />
      </Provider>
    );
    await act(async () => {
      store.dispatch(setLength(15));
    });
    const meter = screen.getByText(/medium/i);
    expect(meter).toBeInTheDocument();
  });
  test('should strong strength if strength level is 3', async () => {
    render(
      <Provider store={store}>
        <StrengthMeter />
      </Provider>
    );
    await act(async () => {
      store.dispatch(setLength(20));
    });
    const meter = screen.getByText(/strong/i);
    expect(meter).toBeInTheDocument();
  });
});
