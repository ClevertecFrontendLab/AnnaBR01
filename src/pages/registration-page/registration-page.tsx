/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-negated-condition */
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { AuthArrowIcon } from '../../assets';
import { Input } from '../../components';
import { AuthLayout } from '../../components/auth-layout/auth-template';
import { HelpError } from '../../components/help-error/help-error';
import { ROUTE } from '../../routes/routes';

import { InputError, Message, RegistrationForm, Step, Text, TextWrapper } from './styles';

export type RegistrationFormValues = {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    defaultValues: { email: '', username: '', password: '', firstName: '', lastName: '', phone: '' },
    mode: 'onBlur',
  });

  const watchUsername = watch('username');

  const checkErrors = () => {
    const ruleNumber = /(?=.*\d)/;
    const ruleLetters = /(?=.*[a-z])/;

    clearErrors('username');

    if (!ruleNumber.test(String(watchUsername).toLowerCase()) && watchUsername !== '') {
      setError('username', { type: 'errorRuleNumber' });
    }

    if (!ruleLetters.test(String(watchUsername).toLowerCase()) && watchUsername !== '') {
      setError('username', { type: 'errorRuleLetters' });
    }
  };

  useEffect(() => {
    checkErrors();
  }, [setError, watch, watchUsername]);

  const onSubmit: SubmitHandler<RegistrationFormValues> = (userInfo) => {
    console.log(userInfo);
  };

  const onFocus = (): void => {
    checkErrors();
  };

  return (
    <AuthLayout title='Регистрация'>
      <Step>1 шаг из 3</Step>

      <RegistrationForm action='#' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name='username'
          rules={{
            required: 'Поле не может быть пустым',
            pattern: {
              value: /(?=.*\d)(?=.*[a-z])/,
              message: 'Используйте для логина латинский алфавит и цифры',
            },
          }}
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              onChange={onChange}
              value={value}
              type='text'
              placeholder='Придумайте логин для входа'
              errorInput={errors.username ? true : false}
              onFocus={onFocus}
              onBlur={onBlur}
              activeInput={!!value}
            />
          )}
        />

        {errors.username?.type === 'pattern' || errors.username?.type === 'required' ? (
          <InputError>{errors.username.message}</InputError>
        ) : (
          <Message>
            Используйте для логина
            <HelpError error={errors.username?.type === 'errorRuleLetters' ? true : false}>
              &nbsp;латинский алфавит
            </HelpError>
            &nbsp;и<HelpError error={errors.username?.type === 'errorRuleNumber' ? true : false}> цифры</HelpError>
          </Message>
        )}
      </RegistrationForm>

      <TextWrapper>
        Есть учётная запись?
        <Text>
          войти
          <Link to={ROUTE.AUTH}>
            <AuthArrowIcon />
          </Link>
        </Text>
      </TextWrapper>
    </AuthLayout>
  );
};
