/* eslint-disable no-negated-condition */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { fetchResetPassword, putDataRequestReset } from '../../store/features/forgot-password-slice';
import { useAppDispatch } from '../../store/hooks';
import { ResetPasswordFormValues } from '../../types/types';
import { rules } from '../../utils/constants';
import { getCode } from '../../utils/get-code';
import { InputAuth } from '../input-auth/input-auth';
import { InputError } from '../input-error/input-error';
import { ButtonAuth, HelpError, Message } from '..';

import { InputWrapper, StyledResetPasswordForm, Text } from './styles';

export const ResetPasswordForm = () => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    clearErrors,
    watch,
    setError,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    defaultValues: { password: '', passwordConfirmation: '' },
    mode: 'onBlur',
  });

  const watchPassword = watch('password');
  const watchPasswordConfirmation = watch('passwordConfirmation');
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

  useEffect(() => {
    checkErrorsPassword();
  }, [watchPassword]);

  const { search } = useLocation();
  const onSubmit: SubmitHandler<ResetPasswordFormValues> = (userInfo) => {
    const requestValue = { ...userInfo, code: getCode(search) };

    dispatch(putDataRequestReset(requestValue));
    dispatch(fetchResetPassword(requestValue));
  };

  return (
    <React.Fragment>
      <StyledResetPasswordForm action='#' onSubmit={handleSubmit(onSubmit)} data-test-id='reset-password-form'>
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
                placeholder='?????????? ????????????'
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
            <Message>???????????? ???? ?????????? 8 ????????????????, ?? ?????????????????? ???????????? ?? ????????????</Message>
          ) : errors.password?.type === 'pattern' || errors.password?.type === 'required' ? (
            <InputError>{errors.password.message}</InputError>
          ) : (
            <Message>
              ????????????
              <HelpError error={errors.password?.types?.errorRuleLength ? true : false}>
                &nbsp;???? ?????????? 8 ????????????????
              </HelpError>
              ,
              <HelpError error={errors.password?.types?.errorRuleLetter ? true : false}>
                &nbsp;?? ?????????????????? ????????????
              </HelpError>
              &nbsp;??<HelpError error={errors.password?.types?.errorRuleNumber ? true : false}> ????????????</HelpError>
            </Message>
          )}
        </InputWrapper>

        <InputWrapper>
          <Controller
            control={control}
            name='passwordConfirmation'
            rules={rules.passwordConfirmation}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputAuth
                name='passwordConfirmation'
                onChange={onChange}
                value={value}
                type='password'
                placeholder='?????????????????? ????????????'
                errorInput={
                  errors.passwordConfirmation ||
                  (watchPasswordConfirmation !== watchPassword && watchPasswordConfirmation !== '')
                    ? true
                    : false
                }
                onFocus={() => {
                  clearErrors('passwordConfirmation');
                }}
                onBlurEvent={onBlur}
                activeInput={!!value}
              />
            )}
          />

          {errors.passwordConfirmation && <InputError>{errors.passwordConfirmation.message}</InputError>}
          {watchPasswordConfirmation !== watchPassword && watchPasswordConfirmation !== '' && (
            <InputError>???????????? ???? ??????????????????</InputError>
          )}
        </InputWrapper>

        <ButtonAuth
          text='?????????????????? ??????????????????'
          disabled={
            errors.password || errors.passwordConfirmation || watchPasswordConfirmation !== watchPassword ? true : false
          }
        />
      </StyledResetPasswordForm>

      <Text>?????????? ???????????????????? ?????????????? ?? ????????????????????, ?????????????????? ?????????? ????????????</Text>
    </React.Fragment>
  );
};
