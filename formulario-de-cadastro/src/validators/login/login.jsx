import * as yup from 'yup';

export const schema = yup
    .object()
    .shape({
      email: yup
      .string()
      .required('O email é obrigatório!')
      .email('O email tem que ser valido!')
      .trim(),
      password: yup
      .string()
      .required('A senha é obrigatória!')
      .matches(/[A-Z]/, 'deve conter ao menos 1 letra maiúscula')
      .trim()
      .matches(/([a-z])/, 'Deve conter ao menos 1 letra minúscula!')
      .matches(/(\d)/, 'Deve conter ao menos 1 número!')
      .matches(/(\W)|_/, 'Deve conter ao menos 1 caracter especial!')
      .matches(/.{8,}/, 'Deve conter ao menos 8 dígitos!'),
    })