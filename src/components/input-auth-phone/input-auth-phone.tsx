/* eslint-disable prefer-const */
import React, { ChangeEvent, FocusEvent } from 'react';
import { InputMaskChangeEvent } from 'primereact/inputmask';

import { InputWrapper, Placeholder, StyledInputAuthPhone } from './styles';

const placeholderActiveInputStyle = {
  top: '6px',
  color: ' #A7A7A7',
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '16px',
  letterSpacing: '0.2px',
};

const placeholderInputStyle = {
  top: '19px',
  color: ' #363636',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
  letterSpacing: '0.1px',
};

interface IProps {
  value: string;
  onChange: (event: InputMaskChangeEvent) => void;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
  onBlurEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  errorInput: boolean;
  activeInput: boolean;
  name: string;
}

export const InputAuthPhone = ({
  value,
  onChange,
  label,
  errorInput,
  onFocus,
  onBlurEvent,
  activeInput,
  name,
}: IProps) => (
  <InputWrapper>
    <StyledInputAuthPhone
      placeholder=''
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlurEvent}
      $errorInput={errorInput}
      type='tel'
      mask={activeInput ? '+375 (99) 999-99-99' : ''}
      slotChar='x'
      autoClear={false}
      name={name}
    />
    <Placeholder style={activeInput ? placeholderActiveInputStyle : placeholderInputStyle}>{label}</Placeholder>
  </InputWrapper>
);
