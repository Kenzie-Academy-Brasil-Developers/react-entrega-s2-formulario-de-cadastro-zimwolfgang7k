import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [techs, setTechs] = useState([]);

    const onError = () => {
        toast.error('Ops, algo deu errado!', {
            position: 'top-right',
            autoClose: 1000,
        });
    };
    const onSuccess = () => {
        toast.success('Login concluido!', {
            position: 'top-right',
            autoClose: 1000,
        });
    };

    const navigate = useNavigate();

    async function registerData(data) {
        const response = await api.post('/users', data).catch(err => onError());
        if (response.status === 201) {
            onSuccess();
            navigate('/login'), { replace: true };
        }
        localStorage.clear();
    }

    const loginData = async data => {
        const response = await api
            .post('/sessions', data)
            .catch(err => onError());

        if (response.status === 200) {
            onSuccess();
            navigate('/dashboard'), { replace: true };
        }

        const { user: userResponse, token } = response.data;

        api.defaults.headers.authorization = `Bearer ${token}`;
        setUser(userResponse);

        localStorage.setItem('@TOKEN', token);
        localStorage.setItem('@USERID', userResponse.id);
    };

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem('@TOKEN');

            if (token) {
                try {
                    api.defaults.headers.authorization = `Bearer ${token}`;
                    const { data } = await api.get('/profile');

                    setUser(data);
                } catch (err) {
                    console.log(err);
                }
            }
            setLoading(false);
        }
        loadUser();
    }, []);

    async function deleteTech(id) {
        const response = await api.delete(`/users/techs/${id}`).then(
            toast.error('Tecnologia deletado com sucesso!', {
                position: 'top-right',
                autoClose: 1000,
            })
        );
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loginData,
                loading,
                registerData,
                isModalOpen,
                setIsModalOpen,
                deleteTech,
                techs,
                setTechs,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
