/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-negated-condition */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable complexity */
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { AuthArrowIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import { fetchRegistrationUser, putUser } from '../../store/features/registration-user-slice';
import { useAppDispatch } from '../../store/hooks';
import { RegistrationFormValues } from '../../types/types';
import { ButtonAuth, HelpError, InputAuth, InputAuthPhone, InputError, Message } from '..';

import { InputWrapper, Registration, Step, Text, TextWrapper } from './styles';

const rules = {
  username: {
    required: 'Поле не может быть пустым',
    pattern: {
      value: /(?=.*\d)([A-Za-z])/,
      message: 'Используйте для логина латинский алфавит и цифры',
    },
  },
  password: {
    required: 'Поле не может быть пустым',
    pattern: {
      value: /(?=.*\d)(?=.*[A-Z]).{8,}/,
      message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
    },
  },
  firstName: {
    required: 'Поле не может быть пустым',
  },
  lastName: {
    required: 'Поле не может быть пустым',
  },
  phone: {
    required: 'Поле не может быть пустым',
    pattern: {
      value: /^\+[1-9]{3}(\s+)?\(?(25|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/,
      message: 'В формате +375 (xx) xxx-xx-xx',
    },
  },
  email: {
    required: 'Поле не может быть пустым',
    pattern: {
      value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
      message: 'Введите корректный e-mail',
    },
  },
};

export type Steps = '1' | '2' | '3';

export const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState<Steps>('1');
  const [isActive, setIsActive] = useState(false);

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
  const checkErrorsUsername = () => {
    const ruleNumber = /(?=.*\d)/;
    const ruleLetters = /([A-Za-z])/;

    clearErrors('username');

    if (!ruleNumber.test(String(watchUsername).toLowerCase()) && watchUsername !== '') {
      setError('username', { types: { errorRuleNumber: 'error' } });
    }
    if (!ruleLetters.test(String(watchUsername)) && watchUsername !== '') {
      setError('username', { types: { errorRuleLetters: 'error' } });
    }
    if (
      !ruleNumber.test(String(watchUsername).toLowerCase()) &&
      !ruleLetters.test(String(watchUsername)) &&
      watchUsername !== ''
    ) {
      setError('username', { types: { errorRuleNumber: 'error', errorRuleLetters: 'error' } });
    }
  };

  const watchPassword = watch('password');
  const checkErrorsPassword = () => {
    const ruleNumber = /(?=.*\d)/;
    const ruleLetter = /(?=.*[A-Z])/;
    const ruleLength = /.{8,}/;

    clearErrors('password');

    if (!ruleNumber.test(String(watchPassword).toLowerCase()) && watchPassword !== '') {
      setError('password', { types: { errorRuleNumber: 'error' } });
    }
    if (!ruleLetter.test(String(watchPassword)) && watchPassword !== '') {
      setError('password', { types: { errorRuleLetter: 'error' } });
    }
    if (!ruleLength.test(String(watchPassword).toLowerCase()) && watchPassword !== '') {
      setError('password', { types: { errorRuleLength: 'error' } });
    }
    if (
      !ruleNumber.test(String(watchPassword).toLowerCase()) &&
      !ruleLetter.test(String(watchPassword)) &&
      watchPassword !== ''
    ) {
      setError('password', { types: { errorRuleNumber: 'error', errorRuleLetter: 'error' } });
    }
    if (
      !ruleNumber.test(String(watchPassword).toLowerCase()) &&
      !ruleLength.test(String(watchPassword).toLowerCase()) &&
      watchPassword !== ''
    ) {
      setError('password', { types: { errorRuleNumber: 'error', errorRuleLength: 'error' } });
    }
    if (
      !ruleLetter.test(String(watchPassword)) &&
      !ruleLength.test(String(watchPassword).toLowerCase()) &&
      watchPassword !== ''
    ) {
      setError('password', { types: { errorRuleLetter: 'error', errorRuleLength: 'error' } });
    }
    if (
      !ruleNumber.test(String(watchPassword).toLowerCase()) &&
      !ruleLetter.test(String(watchPassword)) &&
      !ruleLength.test(String(watchPassword).toLowerCase()) &&
      watchPassword !== ''
    ) {
      setError('password', { types: { errorRuleNumber: 'error', errorRuleLetter: 'error', errorRuleLength: 'error' } });
    }
  };

  const watchEmail = watch('email');
  const checkEmail = () => {
    const ruleLetters = /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$)/;

    if (!watchEmail) {
      setError('email', { type: 'required', message: 'Поле не может быть пустым' });
    } else if (!ruleLetters.test(String(watchEmail)) && watchEmail !== '') {
      setError('email', { type: 'email', message: 'Введите корректный e-mail' });
    } else clearErrors('email');
  };

  useEffect(() => {
    checkErrorsUsername();
  }, [watchUsername]);

  useEffect(() => {
    checkErrorsPassword();
  }, [watchPassword]);

  const onBlurFirstName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value) {
      clearErrors('firstName');
    } else {
      setError('firstName', { type: 'required', message: 'Поле не может быть пустым' });
    }
  };

  const onBlurLastName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value) {
      clearErrors('lastName');
    } else {
      setError('lastName', { type: 'required', message: 'Поле не может быть пустым' });
    }
  };

  const onSubmit: SubmitHandler<RegistrationFormValues> = (userInfo) => {
    if (!errors.username && !errors.password && step === '1') {
      setStep('2');
    }

    if (!errors.firstName && !errors.lastName && step === '2') {
      setStep('3');
    }

    if (!errors.phone && !errors.email && step === '3') {
      dispatch(putUser(userInfo));
      dispatch(fetchRegistrationUser(userInfo)).finally(() => {
        reset();
      });
    }
  };

  return (
    <React.Fragment>
      <Step>{step} шаг из 3</Step>

      <Registration action='#' onSubmit={handleSubmit(onSubmit)} data-test-id='register-form'>
        {step === '1' && (
          <React.Fragment>
            <InputWrapper>
              <Controller
                control={control}
                name='username'
                rules={rules.username}
                render={({ field: { onChange, value, onBlur } }) => (
                  <InputAuth
                    name='username'
                    onChange={onChange}
                    value={value}
                    type='text'
                    placeholder='Придумайте логин для входа'
                    errorInput={errors.username ? true : false}
                    onFocus={() => {
                      checkErrorsUsername();
                    }}
                    onBlurEvent={onBlur}
                    activeInput={!!value}
                  />
                )}
              />

              {!errors.username ? (
                <Message> Используйте для логина латинский алфавит и цифры</Message>
              ) : errors.username?.type === 'pattern' || errors.username?.type === 'required' ? (
                <InputError>{errors.username.message}</InputError>
              ) : (
                <Message>
                  Используйте для логина
                  <HelpError error={errors.username?.types?.errorRuleLetters ? true : false}>
                    &nbsp;латинский алфавит
                  </HelpError>
                  &nbsp;и<HelpError error={errors.username?.types?.errorRuleNumber ? true : false}> цифры</HelpError>
                </Message>
              )}
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
                    errorInput={errors.password ? true : false}
                    onFocus={() => {
                      checkErrorsPassword();
                    }}
                    onBlurEvent={onBlur}
                    activeInput={!!value}
                    okPassword={!errors.password && value ? true : false}
                  />
                )}
              />

              {!errors.password ? (
                <Message>Пароль не менее 8 символов, с заглавной буквой и цифрой</Message>
              ) : errors.password?.type === 'pattern' || errors.password?.type === 'required' ? (
                <InputError>{errors.password.message}</InputError>
              ) : (
                <Message>
                  Пароль
                  <HelpError error={errors.password?.types?.errorRuleLength ? true : false}>
                    &nbsp;не менее 8 символов
                  </HelpError>
                  ,
                  <HelpError error={errors.password?.types?.errorRuleLetter ? true : false}>
                    &nbsp;с заглавной буквой
                  </HelpError>
                  &nbsp;и<HelpError error={errors.password?.types?.errorRuleNumber ? true : false}> цифрой</HelpError>
                </Message>
              )}
            </InputWrapper>
          </React.Fragment>
        )}

        {step === '2' && (
          <React.Fragment>
            <InputWrapper>
              <Controller
                control={control}
                name='firstName'
                rules={rules.firstName}
                render={({ field: { onChange, value } }) => (
                  <InputAuth
                    name='firstName'
                    onChange={onChange}
                    value={value}
                    type='text'
                    placeholder='Имя'
                    errorInput={errors.firstName ? true : false}
                    onFocus={() => {
                      clearErrors('firstName');
                    }}
                    onBlurEvent={(e) => onBlurFirstName(e)}
                    activeInput={!!value}
                  />
                )}
              />

              {errors.firstName?.type && <InputError>{errors.firstName.message}</InputError>}
            </InputWrapper>
            <InputWrapper>
              <Controller
                control={control}
                name='lastName'
                rules={rules.lastName}
                render={({ field: { onChange, value } }) => (
                  <InputAuth
                    name='lastName'
                    onChange={onChange}
                    value={value}
                    type='text'
                    placeholder='Фамилия'
                    errorInput={errors.lastName ? true : false}
                    onFocus={() => {
                      clearErrors('lastName');
                    }}
                    onBlurEvent={(e) => onBlurLastName(e)}
                    activeInput={!!value}
                  />
                )}
              />

              {errors.lastName?.type && <InputError>{errors.lastName.message}</InputError>}
            </InputWrapper>
          </React.Fragment>
        )}

        {step === '3' && (
          <React.Fragment>
            <InputWrapper>
              <Controller
                control={control}
                name='phone'
                rules={rules.phone}
                render={({ field: { onChange, value } }) => (
                  <InputAuthPhone
                    name='phone'
                    onChange={onChange}
                    value={value}
                    label='Номер телефона'
                    errorInput={errors.phone ? true : false}
                    onFocus={() => {
                      setIsActive(true);
                      clearErrors('phone');
                    }}
                    activeInput={isActive}
                  />
                )}
              />

              {errors.phone ? (
                <InputError>{errors.phone.message}</InputError>
              ) : (
                <Message>В формате +375 (xx) xxx-xx-xx</Message>
              )}
            </InputWrapper>

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
                    placeholder='E-mail'
                    errorInput={errors.email ? true : false}
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

              {errors.email?.type && <InputError>{errors.email?.message}</InputError>}
            </InputWrapper>
          </React.Fragment>
        )}

        {step === '1' ? (
          <ButtonAuth text='следующий шаг' disabled={errors.username || errors.password ? true : false} />
        ) : step === '2' ? (
          <ButtonAuth text='последний шаг' disabled={errors.firstName || errors.lastName ? true : false} />
        ) : (
          <ButtonAuth text='зарегистрироваться' disabled={errors.phone || errors.email ? true : false} />
        )}
      </Registration>

      <TextWrapper>
        Есть учётная запись?
        <Text>
          войти
          <Link to={ROUTE.AUTH}>
            <AuthArrowIcon />
          </Link>
        </Text>
      </TextWrapper>
    </React.Fragment>
  );
};
