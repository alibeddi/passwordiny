"use client"

import React from 'react';
import Display from '@/features/home/components/display/Display';
import { Options } from '@/features/home/components/options/Options';
import Slider from '@/features/home/components/UI/slider/Slider';
import CheckBox from '@/features/home/components/UI/checkBox/CheckBox';
import { Provider } from 'react-redux';
import StrengthMeter from '@/features/home/components/strengthMeter/StrengthMeter';
import GenerateButton from '@/features/home/components/UI/button/GenerateButton';
function App() {
  return (
    <Provider >
    <main>
      <h1>Password Generator</h1>
      <Display />
      <Options>
        <Slider />
        <CheckBox text="Include Uppercase Letters" tag="uppLetters" />
        <CheckBox text="Include Lowercase Letters" tag="lowLetters" />
        <CheckBox text="Include Numbers" tag="numbers" />
        <CheckBox text="Include Symbols" tag="symbols" />
        <StrengthMeter />
        <GenerateButton />
      </Options>
      </main>
      </Provider>
  );
}

export default App;
