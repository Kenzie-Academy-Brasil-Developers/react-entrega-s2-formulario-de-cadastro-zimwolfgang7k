import { Container, Input } from '../../style/global';
import { useContext } from 'react';
import { Title1, Headline, HeadlineBold } from '../../style/typography';
import {
    ContainerForm,
    Button,
    ButtonCadastro,
    ContainerButtonCadastro,
    Form,
} from './style';
import logo from '../../assets/logo.svg';
import { schema } from '../../validators/login/login';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const { loginData } = useContext(AuthContext);

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
                    <Form onSubmit={handleSubmit(loginData)}>
                        <div className="img-title">
                            <img src={logo} alt="logo" />
                            <Title1>Login</Title1>
                        </div>
                        <Headline htmlFor="email">Email</Headline>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            {...register('email')}
                        />
                        {errors.email?.message && (
                            <p className="error">{errors.email.message}</p>
                        )}
                        <Headline htmlFor="senha">Senha</Headline>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            {...register('password')}
                        />
                        {errors.password?.message && (
                            <p className="error">{errors.password.message}</p>
                        )}
                        <Button>Entrar</Button>
                        <ContainerButtonCadastro>
                            <HeadlineBold>
                                Ainda não possui uma conta?
                            </HeadlineBold>
                            <ButtonCadastro to={`/register`}>
                                Cadastre-se
                            </ButtonCadastro>
                        </ContainerButtonCadastro>
                    </Form>
                </ContainerForm>
            </Container>
        </motion.div>
    );
};

export default Login;
