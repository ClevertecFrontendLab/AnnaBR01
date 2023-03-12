import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { AuthArrowIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import { fetchAuthUser, putUser } from '../../store/features/user-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getUserInfo } from '../../store/selectors/user-selector';
import { AuthFormValues, SendEmailFormValues } from '../../types/types';
import { InputAuth } from '../input-auth/input-auth';
import { InputError } from '../input-error/input-error';
import { ButtonAuth, Message } from '..';

import { ForgotError, InputWrapper, StyledSendEmailForm, Text, TextLink, TextWrapper } from './styles';
import { fetchSendEmail } from '../../store/features/forgot-password-slice';
import { getForgotPasswordInfo } from '../../store/selectors/forgot-password-selector';

const rules = {
  email: {
    required: 'Поле не может быть пустым',
    pattern: {
      value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
      message: 'Введите корректный e-mail',
    },
  },
};

export const SendEmailForm = () => {
  const dispatch = useAppDispatch();
  const { errorSendEmailMessage } = useAppSelector(getForgotPasswordInfo);

  const {
    control,
    handleSubmit,
    clearErrors,
    watch,
    setError,
    formState: { errors },
  } = useForm<SendEmailFormValues>({
    defaultValues: { email: '' },
    mode: 'onBlur',
  });

  const watchEmail = watch('email');
  const checkEmail = () => {
    const ruleLetters = /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$)/;

    if (!watchEmail) {
      setError('email', { type: 'required', message: 'Поле не может быть пустым' });
    } else if (!ruleLetters.test(String(watchEmail)) && watchEmail !== '') {
      setError('email', { type: 'email', message: 'Введите корректный e-mail' });
    } else clearErrors('email');
  };

  const onSubmit: SubmitHandler<SendEmailFormValues> = (userInfo) => {
    dispatch(fetchSendEmail(userInfo));
  };

  return (
    <React.Fragment>
      <StyledSendEmailForm action='#' onSubmit={handleSubmit(onSubmit)} data-test-id='send-email-form'>
        <InputWrapper>
          <Controller
            control={control}
            name='email'
            rules={rules.email}
            render={({ field: { onChange, value } }) => (
              <InputAuth
                name='email'
                onChange={onChange}
                value={value}
                type='email'
                placeholder='Email'
                errorInput={errors.email || errorSendEmailMessage ? true : false}
                onFocus={() => {
                  clearErrors('email');
                }}
                onBlurEvent={() => {
                  checkEmail();
                }}
                activeInput={!!value}
              />
            )}
          />

          {errors.email ? (
            <InputError>{errors.email.message}</InputError>
          ) : (
            <Message>
              {errorSendEmailMessage && (
                <ForgotError>
                  {errorSendEmailMessage} <br />
                </ForgotError>
              )}
              На это email будет отправлено письмо с инструкциями по восстановлению пароля
            </Message>
          )}
        </InputWrapper>

        <ButtonAuth text='восстановить' disabled={errors.email ? true : false} />
      </StyledSendEmailForm>

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
