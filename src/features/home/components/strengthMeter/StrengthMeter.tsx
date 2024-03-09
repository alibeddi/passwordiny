import React from 'react';
import {
  StrengthMeterWraper,
  Meter,
  Levels,
  LevelBar,
} from './StrengthMeterStyles';
import { useAppSelector } from '../../store/hooks';
import { selectStrength } from '../../store/passwordSlice';

type Str = {
  [key: number]: string;
};

const StrengthMeter: React.FC = () => {
  const str = useAppSelector(selectStrength);

  const strText: Str = {
    1: 'too weak',
    2: 'weak',
    3: 'medium',
    4: 'strong',
  };

  const color: Str = {
    1: 'red',
    2: 'orange',
    3: 'yellow',
    4: 'neon-green',
  };

  return (
    <StrengthMeterWraper>
      <p>strength</p>
      <Meter>
        <h4>{strText[str]}</h4>
        <Levels>
          <LevelBar color={color[str]} isFilled={str >= 1} />
          <LevelBar color={color[str]} isFilled={str >= 2} />
          <LevelBar color={color[str]} isFilled={str >= 3} />
          <LevelBar color={color[str]} isFilled={str >= 4} />
        </Levels>
      </Meter>
    </StrengthMeterWraper>
  );
};

export default StrengthMeter;
