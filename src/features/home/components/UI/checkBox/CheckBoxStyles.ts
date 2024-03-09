import styled from 'styled-components';

interface ICheckbox {
  isChecked: boolean;
}

export const ChexBoxLabel = styled.label`
  display: flex;
  color: var(--color-almost-white);
  gap: 2.4rem;
  cursor: pointer;

  margin-bottom: 2.4rem;

  &:hover {
    span {
      border: 2px solid var(--color-neon-green);
    }
  }
`;

export const HiddenCheckBox = styled.input.attrs({ type: 'checkbox' })`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CustomeCheckBox = styled.span<ICheckbox>`
  width: 2rem;
  height: 2rem;
  border: 2px solid
    ${({ isChecked }) =>
      isChecked ? 'var(--color-neon-green)' : 'var(--color-almost-white)'};
  background-color: ${({ isChecked }) =>
    isChecked ? 'var(--color-neon-green)' : 'transperent'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.3s ease;
  svg {
    transition: transform 0.3s ease 0.1s;
    transform: ${({ isChecked }) => (isChecked ? 'scale(1)' : 'scale(0)')};
  }
`;
