import React, { ChangeEvent, FocusEvent, HTMLInputTypeAttribute } from 'react';

import { OkPasswordIcon, PasswordCloseIcon, PasswordOpenIcon } from '../../assets';

import { InputWrapper, LabelPassword, OkPassword, Placeholder, StyledInput } from './styles';

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

export type ViewPassword = 'open' | 'close';

interface IProps {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  errorInput: boolean;
  activeInput: boolean;
  okPassword?: boolean;
  viewPassword?: ViewPassword;
}

export const Input = ({
  value,
  onChange,
  placeholder,
  type,
  errorInput,
  onFocus,
  onBlur,
  activeInput,
  okPassword,
  viewPassword,
}: IProps) => {
  const renderingOk = okPassword && type === 'password' ? true : false;

  return (
    <InputWrapper>
      <StyledInput
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        $errorInput={errorInput}
        $renderingOk={renderingOk}
      />
      <Placeholder style={activeInput ? placeholderActiveInputStyle : placeholderInputStyle}>{placeholder}</Placeholder>

      {okPassword && type === 'password' && (
        <OkPassword>
          <OkPasswordIcon />
        </OkPassword>
      )}

      {type === 'password' && (
        <LabelPassword>{viewPassword === 'open' ? <PasswordOpenIcon /> : <PasswordCloseIcon />}</LabelPassword>
      )}
    </InputWrapper>
  );
};
