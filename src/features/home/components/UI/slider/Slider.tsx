"use client"

import React from 'react';
import { SliderContent, SliderComponent, SliderWrapper } from './SliderStyles';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectLength } from '../../../store/passwordSlice';
import { setLength } from '../../../store/passwordSlice';
const Slider: React.FC = () => {
  const length = useAppSelector(selectLength);
  const dispatch = useAppDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLength(+e.target.value));
  };

  return (
    <SliderWrapper>
      <SliderContent>
        <span>Character Length</span>
        <h3>{length}</h3>
      </SliderContent>
      <SliderComponent
        data-testid="slider"
        type="range"
        min="0"
        max="20"
        value={length}
        onChange={changeHandler}
      />
    </SliderWrapper>
  );
};

export default Slider;
