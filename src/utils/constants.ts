export const rules = {
  identifier: {
    required: 'Поле не может быть пустым',
  },

  passwordAuth: {
    required: 'Поле не может быть пустым',
  },

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

  passwordConfirmation: {
    required: 'Поле не может быть пустым',
  },
};
