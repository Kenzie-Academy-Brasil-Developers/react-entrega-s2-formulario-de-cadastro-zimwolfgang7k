import { Link, Navigate } from 'react-router-dom';
import { Container } from '../../style/global';
import logo from '../../assets/logo.svg';
import { Button, ContainerDashboard, Header, Main, Nav, Paragraph } from './style';
import { HeadlineBold, Title1 } from '../../style/typography';
import { motion } from 'framer-motion';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

const Dashboard = () => {

    const storageClear = () => {
        localStorage.clear()
    }

    const {user, loading} = useContext(AuthContext);
    if(loading) return <div>Carregando...</div>
    
    return (
        <motion.div initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 1}}
        >
        {user ? <ContainerDashboard>
                <Nav>
                    <img src={logo} alt="logo" />
                    <Button to={'/login'} onClick={storageClear}>Sair</Button>
                </Nav>
                <hr />
            <Header>
                <Title1>Olá, {user.name}</Title1>
                <HeadlineBold>
                    {user.course_module}
                </HeadlineBold>
            </Header>
            <hr />
            <Main>
                <Title1>Que pena! Estamos em desenvolvimento :(</Title1>
                <Paragraph>
                    Nossa aplicação está em desenvolvimento, em breve teremos
                    novidades
                </Paragraph>
            </Main>
        </ContainerDashboard> : <Navigate to='/login' replace/>}
        
        </motion.div>
    );
};

export default Dashboard;
