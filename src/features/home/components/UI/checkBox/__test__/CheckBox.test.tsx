import { screen, render, fireEvent } from '@testing-library/react';

import CheckBox from '../CheckBox';

import { Provider } from 'react-redux';
import { store } from '../../../../store/store';

describe('Checkbox testing', () => {
  test('should render component', () => {
    render(
      <Provider store={store}>
        <CheckBox text="Include Uppercase Letters" tag="uppLetters" />
      </Provider>
    );
    const checkbox = screen.getByLabelText(/Include Uppercase Letters/i);
    expect(checkbox).toBeInTheDocument();
  });
  test('should not be checked before clicking', () => {
    render(
      <Provider store={store}>
        <CheckBox text="Include Uppercase Letters" tag="uppLetters" />
      </Provider>
    );
    const checkbox = screen.getByLabelText(/Include Uppercase Letters/i);
    expect(checkbox).not.toBeChecked();
  });
  test('should  be checked before clicking', () => {
    render(
      <Provider store={store}>
        <CheckBox text="Include Uppercase Letters" tag="uppLetters" />
      </Provider>
    );
    const checkbox = screen.getByLabelText(/Include Uppercase Letters/i);
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
