import { Navigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import {
    Animation,
    Button,
    ContainerDashboard,
    Header,
    Main,
    Nav,
} from './style';
import { HeadlineBold, Title1 } from '../../style/typography';
import { motion } from 'framer-motion';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';
import TechList from '../../components/TechsList';
import Lottie from 'react-lottie';
import animationData from './lf30_editor_56xvg3wv.json';

const Dashboard = () => {
    const [animationState, setAnimationState] = useState({
        isStopped: false,
        isPaused: false,
    });
    const { user, loading, loadTechs } = useContext(AuthContext);

    const storageClear = () => {
        localStorage.clear();
    };

    useEffect(() => {
        loadTechs();
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    if (loading)
        return (
            <Animation>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}
                />
            </Animation>
        );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {user ? (
                <ContainerDashboard>
                    <Nav>
                        <img src={logo} alt="logo" />
                        <Button to={'/login'} onClick={storageClear}>
                            Sair
                        </Button>
                    </Nav>
                    <hr />
                    <Header>
                        <Title1>Olá, {user.name}</Title1>
                        <HeadlineBold>{user.course_module}</HeadlineBold>
                    </Header>
                    <hr />
                    <Main>
                        <TechList />
                    </Main>
                </ContainerDashboard>
            ) : (
                <Navigate to="/login" replace />
            )}
        </motion.div>
    );
};

export default Dashboard;
