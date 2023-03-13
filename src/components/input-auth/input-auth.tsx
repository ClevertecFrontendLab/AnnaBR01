/* eslint-disable prefer-const */
import React, { ChangeEvent, FocusEvent, HTMLInputTypeAttribute, useState } from 'react';

import { OkPasswordIcon, PasswordCloseIcon, PasswordOpenIcon } from '../../assets';

import { InputWrapper, LabelPassword, OkPassword, Placeholder, StyledInputAuth } from './styles';

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
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlurEvent?: (event: FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  errorInput: boolean;
  activeInput: boolean;
  okPassword?: boolean;
  name: string;
}

export const InputAuth = ({
  value,
  onChange,
  placeholder,
  type,
  errorInput,
  onFocus,
  onBlurEvent,
  activeInput,
  okPassword,
  name,
}: IProps) => {
  const renderingOk = okPassword && type === 'password' ? true : false;
  const [viewPasswordIcon, setViewPasswordIcon] = useState<ViewPassword>('close');
  const [renderingType, setRenderingType] = useState(type);

  const toggleViewPasswordIcon = () => {
    if (viewPasswordIcon === 'close') {
      setViewPasswordIcon('open');
      setRenderingType('text');
    } else {
      setViewPasswordIcon('close');
      setRenderingType(type);
    }
  };

  return (
    <InputWrapper>
      <StyledInputAuth
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlurEvent}
        type={renderingType}
        $errorInput={errorInput}
        $renderingOk={renderingOk}
        name={name}
      />
      <Placeholder style={activeInput ? placeholderActiveInputStyle : placeholderInputStyle}>{placeholder}</Placeholder>

      {okPassword && type === 'password' && (
        <OkPassword>
          <OkPasswordIcon data-test-id='checkmark' />
        </OkPassword>
      )}

      {type === 'password' && value && (
        <LabelPassword onClick={toggleViewPasswordIcon}>
          {viewPasswordIcon === 'open' ? (
            <PasswordOpenIcon data-test-id='eye-opened' />
          ) : (
            <PasswordCloseIcon data-test-id='eye-closed' />
          )}
        </LabelPassword>
      )}
    </InputWrapper>
  );
};
