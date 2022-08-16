import { Container, Input } from '../../style/global';
import { ContainerForm, Form, Button, Header } from './style';
import { Title1, Headline } from '../../style/typography';
import logo from '../../assets/logo.svg';
import Linke from './style';
import { schema } from '../../validators/register/register';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const { registerData } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Container>
                <ContainerForm>
                    <Form onSubmit={handleSubmit(registerData)}>
                        <Header>
                            <img src={logo} alt="logo" />
                            <Linke to={`/login`}>Voltar</Linke>
                        </Header>
                        <section className="title">
                            <Title1>Cria sua conta</Title1>
                            <Headline>Rapido e grátis, vamos nessa</Headline>
                        </section>

                        <Headline htmlFor="nome">Nome</Headline>

                        <Input
                            id="name"
                            type="nome"
                            placeholder="Digite aqui seu nome"
                            {...register('name')}
                        />
                        {errors.name?.message && (
                            <p className="error">{errors.name.message}</p>
                        )}

                        <Headline htmlFor="email">Email</Headline>

                        <Input
                            id="email"
                            type="email"
                            placeholder="Digite aqui seu email"
                            {...register('email')}
                        />
                        {errors.email?.message && (
                            <p className="error">{errors.email.message}</p>
                        )}

                        <Headline htmlFor="password">Senha</Headline>

                        <Input
                            id="password"
                            type="password"
                            placeholder="Digite aqui seu senha"
                            {...register('password')}
                        />
                        {errors.password?.message && (
                            <p className="error">{errors.password.message}</p>
                        )}

                        <Headline htmlFor="confirmPassword">
                            Confirmar Senha
                        </Headline>

                        <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="Digite novamente sua senha"
                            {...register('confirmPassword')}
                        />
                        {errors.confirmPassword?.message && (
                            <p className="error">
                                {errors.confirmPassword.message}
                            </p>
                        )}

                        <Headline htmlFor="bio">Bio</Headline>

                        <Input
                            type="text"
                            id="bio"
                            placeholder="Fale sobre você"
                            {...register('bio')}
                        />
                        {errors.bio?.message && (
                            <p className="error">{errors.bio.message}</p>
                        )}

                        <Headline htmlFor="contact">Contato</Headline>

                        <Input
                            type="tel"
                            id="contact"
                            placeholder="Opção de contato"
                            {...register('contact')}
                        />
                        {errors.contact?.message && (
                            <p className="error">{errors.contact.message}</p>
                        )}

                        <Headline htmlFor="select">Selecionar módulo</Headline>

                        <select
                            id="course_module"
                            {...register('course_module')}
                        >
                            <option value="Primeiro módulo (Introdução ao Frontend)">
                                Primeiro módulo
                            </option>
                            <option value="Segundo módulo (Frontend Avançado)">
                                Segundo módulo
                            </option>
                            <option value="Terceiro módulo (Introdução ao Backend)">
                                Terceiro módulo
                            </option>
                            <option value="Quarto módulo (Backend Avançado)">
                                Quarto módulo
                            </option>
                        </select>

                        <Button>Cadastrar</Button>
                    </Form>
                </ContainerForm>
            </Container>
        </motion.div>
    );
};

export default Register;
