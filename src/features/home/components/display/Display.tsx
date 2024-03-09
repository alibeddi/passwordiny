"use client"
import React from 'react';
import { DisplayWrapper, Password } from './DispalyStyles';
import  CopyIcon  from '@images/icon-copy.svg';
import { useAppSelector } from '../../store/hooks';
import { selectPassword } from '../../store/passwordSlice';
const Display: React.FC = () => {
  const password = useAppSelector(selectPassword);

  const copyHandler = () => {
    navigator.clipboard.writeText(password ? password : 'P4$5W0rD!');
  };

  return (
    <DisplayWrapper>
      <Password password={password}>
        {password ? password : 'P4$5W0rD!'}
      </Password>
      <CopyIcon onClick={copyHandler} data-testid="copyIcon" />
    </DisplayWrapper>
  );
};

export default Display;
