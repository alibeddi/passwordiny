import { screen, render, fireEvent } from '@testing-library/react';

import Slider from '../Slider';

import { Provider } from 'react-redux';
import { store } from '../../../../store/store';

describe('Slider component', () => {
  test('should render component', () => {
    render(
      <Provider store={store}>
        <Slider />
      </Provider>
    );
    const text = screen.getByText('Character Length');
    expect(text).toBeInTheDocument();
  });

  test('should have initial length 0', () => {
    render(
      <Provider store={store}>
        <Slider />
      </Provider>
    );

    const len = screen.getByRole('heading', { level: 3 });
    expect(len).toHaveTextContent('0');
  });

  test('should change length to 10', () => {
    render(
      <Provider store={store}>
        <Slider />
      </Provider>
    );

    const slider = screen.getByTestId('slider');

    fireEvent.change(slider, {
      target: { value: 10 },
    });

    const len = screen.getByRole('heading', { level: 3 });
    expect(len).toHaveTextContent('10');
  });
});
