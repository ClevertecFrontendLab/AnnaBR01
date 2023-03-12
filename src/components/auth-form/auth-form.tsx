import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { AuthArrowIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import { fetchAuthUser, putUser } from '../../store/features/user-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getUserInfo } from '../../store/selectors/user-selector';
import { AuthFormValues } from '../../types/types';
import { InputAuth } from '../input-auth/input-auth';
import { InputError } from '../input-error/input-error';
import { ButtonAuth } from '..';

import {
  Auth,
  ErrorAuthStatus,
  ErrorAuthStatusWrapper,
  ForgotPassword,
  InputWrapper,
  Text,
  TextLink,
  TextWrapper,
} from './styles';

const rules = {
  identifier: {
    required: 'Поле не может быть пустым',
  },
  password: {
    required: 'Поле не может быть пустым',
  },
};

export const AuthForm = () => {
  const dispatch = useAppDispatch();
  const { errorAuthStatus } = useAppSelector(getUserInfo);

  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<AuthFormValues>({
    defaultValues: { identifier: '', password: '' },
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<AuthFormValues> = (userInfo) => {
    dispatch(putUser(userInfo));
    dispatch(fetchAuthUser(userInfo));
  };

  return (
    <React.Fragment>
      <Auth action='#' onSubmit={handleSubmit(onSubmit)} data-test-id='auth-form'>
        <InputWrapper>
          <Controller
            control={control}
            name='identifier'
            rules={rules.identifier}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputAuth
                name='identifier'
                onChange={onChange}
                onBlurEvent={onBlur}
                onFocus={() => {
                  clearErrors('identifier');
                }}
                value={value}
                type='text'
                placeholder='Логин'
                errorInput={errors.identifier || errorAuthStatus === 400 ? true : false}
                activeInput={!!value}
              />
            )}
          />

          {errors.identifier && <InputError>{errors.identifier.message}</InputError>}
        </InputWrapper>

        <InputWrapper>
          <Controller
            control={control}
            name='password'
            rules={rules.password}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputAuth
                name='password'
                onChange={onChange}
                value={value}
                type='password'
                placeholder='Пароль'
                errorInput={errors.password || errorAuthStatus === 400 ? true : false}
                onBlurEvent={onBlur}
                onFocus={() => {
                  clearErrors('password');
                }}
                activeInput={!!value}
              />
            )}
          />

          {errors.password && <InputError>{errors.password.message}</InputError>}

          {errorAuthStatus === 400 ? (
            <ErrorAuthStatusWrapper>
              <ErrorAuthStatus data-test-id='hint'>Неверный логин или пароль!</ErrorAuthStatus>
              <TextLink to={ROUTE.FORGOT_PASS}>Восстановить</TextLink>
            </ErrorAuthStatusWrapper>
          ) : (
            <ForgotPassword to={`/${ROUTE.FORGOT_PASS}`}>Забыли логин или пароль?</ForgotPassword>
          )}
        </InputWrapper>

        <ButtonAuth text='вход' disabled={errors.identifier || errors.password ? true : false} />
      </Auth>

      <TextWrapper>
        Нет учётной записи?
        <Text>
          <TextLink to={ROUTE.REGISTRATION}> Регистрация</TextLink>
          <AuthArrowIcon />
        </Text>
      </TextWrapper>
    </React.Fragment>
  );
};
