import * as yup from 'yup';

export const schema = yup
    .object()
    .shape({
        name: yup.string().required('O nome é obrigatório!'),
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
        confirmPassword: yup
            .string()
            .oneOf(
                [yup.ref('password'), null],
                'A senha é diferente da senha anterior!'
            ),
        bio: yup
            .string()
            .required('A bio é obrigatória!')
            .max(50, 'o tamanho maximo de caracteres é 50!'),
        contact: yup.string().required('O contato é obrigatório!'),
    })
    .required();
