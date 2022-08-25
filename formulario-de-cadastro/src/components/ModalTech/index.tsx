import { Headline, Title3 } from '../../style/typography';
import { Input } from '../../style/global';
import { ContainerModal } from './style';
import { AiOutlineClose } from 'react-icons/ai';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ButtonAddTec } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validators/create-tech/create-tech';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

const ModalTech = () => {
    interface ICreateTech {
        title: string;
        status: string;
    }

    const { setIsModalOpen, loadTechs } = useContext(AuthContext);

    const styleButton = { color: 'white' };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateTech>({ resolver: yupResolver(schema) });

    async function createTech(data: ICreateTech) {
        const response = await api
            .post('/users/techs', data)
            .then(async res => {
                if (res.status === 201) {
                    setIsModalOpen(false);
                    await loadTechs();
                    toast.success('Tecnologia criada com sucesso!', {
                        position: 'top-right',
                        autoClose: 1000,
                    });
                }
            })
            .catch(err =>
                toast.error('Uma tecnologia com esse nome ja existe!', {
                    position: 'top-right',
                    autoClose: 1000,
                })
            );
        setIsModalOpen(false);
    }

    return (
        <ContainerModal>
            <div className="modal-box">
                <div className="modal-box--title">
                    <Title3>Cadastrar tecnologia</Title3>
                    <button
                        className="button-close"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <AiOutlineClose size={21} style={styleButton} />
                    </button>
                </div>
                <form
                    className="modal-box--content"
                    onSubmit={handleSubmit(createTech)}
                >
                    <Headline>Nome</Headline>
                    <Input type="text" id="title" {...register('title')} />
                    {errors.title?.message && (
                        <p className="error">{errors.title.message}</p>
                    )}
                    <Headline>Selecionar status</Headline>
                    <select id="status" {...register('status')}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <ButtonAddTec>Cadastrar Tecnologia</ButtonAddTec>
                </form>
            </div>
        </ContainerModal>
    );
};

export default ModalTech;
