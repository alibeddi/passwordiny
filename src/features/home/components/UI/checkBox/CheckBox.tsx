import React from 'react';

import { ReactComponent as CheckIcon } from '../../../images/icon-check.svg';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectParams } from '../../../store/passwordSlice';
import { setParams } from '../../../store/passwordSlice';
import {
  ChexBoxLabel,
  HiddenCheckBox,
  CustomeCheckBox,
} from './CheckBoxStyles';
const CheckBox: React.FC<{ text: string; tag: string }> = ({ text, tag }) => {
  const params = useAppSelector(selectParams);
  const dispatch = useAppDispatch();

  const checkHandler = () => {
    dispatch(setParams(tag));
  };
  return (
    <ChexBoxLabel data-testid="checkbox">
      <HiddenCheckBox onChange={checkHandler} />
      <CustomeCheckBox isChecked={params[tag]}>
        <CheckIcon />
      </CustomeCheckBox>
      <p>{text}</p>
    </ChexBoxLabel>
  );
};

export default CheckBox;
