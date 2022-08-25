import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface AuthProviderProps {
    children: ReactNode;
}
interface IUserContext {
    user: any;
    loginData: (data: IUserLogin) => void;
    loading: Boolean;
    registerData: (data: IUserCadastro) => void;
    isModalOpen: Boolean;
    setIsModalOpen: Dispatch<React.SetStateAction<Boolean>>;
    deleteTech: any;
    techs: ITechsUser[];
    setTechs: Dispatch<React.SetStateAction<ITechsUser[]>>;
    loadTechs: any;
}
export interface IUserCadastro {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string;
}
export interface IUserLogin {
    email: string;
    password: string;
}
export interface IDeleteTech {
    id: string;
}
export interface IUser {
    name: string;
    id: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    techs: ITechsUser[];
    works: IWorksUser[];
    created_at: string;
    updated_at: string;
    avatar_url: string;
}
export interface ITechsUser {
    id: string;
    title: string;
    status: string;
    created_at: string;
    updated_at: string;
}
export interface IWorksUser {
    id: string;
    title: string;
    description: string;
    deploy_url: string;
    created_at: string;
    updated_at: string;
}

export const AuthContext = createContext<IUserContext>({} as IUserContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
    const [techs, setTechs] = useState<ITechsUser[]>([]);

    const navigate = useNavigate();

    async function registerData(data: IUserCadastro) {
        try {
            const response = await api.post('/users', data);
            toast.success('Conta criada com sucesso!');
            navigate('/login'), { replace: true };
        } catch (error) {
            toast.error('Ops, algo deu errado!');
        }
        localStorage.clear();
    }

    async function loginData(data: IUserLogin) {
        try {
            const response = await api.post('/sessions', data);

            const { user: userResponse, token } = response.data;

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser(userResponse);

            localStorage.setItem('@TOKEN', token);
            localStorage.setItem('@USERID', userResponse.id);

            toast.success('Login concluido!');

            navigate('/dashboard'), { replace: true };
        } catch (error) {
            toast.error('Ops, algo deu errado!');
        }
    }

    async function loadTechs() {
        try {
            const response = await api.get('/profile');
            console.log(response);
            setTechs(response.data.techs);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem('@TOKEN');

            if (token) {
                try {
                    api.defaults.headers.common[
                        'Authorization'
                    ] = `Bearer ${token}`;
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

    async function deleteTech(id: IDeleteTech) {
        try {
            const response = await api.delete(`/users/techs/${id}`);
            loadTechs();
            toast.success('Tecnologia deletada com sucesso!');
        } catch (error) {
            toast.error('Ops, algo deu errado!');
        }
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
                loadTechs,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
