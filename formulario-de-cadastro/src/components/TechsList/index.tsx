import { Title2 } from '../../style/typography';
import {
    ButtonOpenModal,
    ContainerListTec,
    ContainerListTecs,
    TecButton,
} from './style';
import { AiOutlinePlus } from 'react-icons/ai';
import { AuthContext, ITechsUser } from '../../contexts/AuthContext';
import ModalTech from '../ModalTech';
import { useContext } from 'react';
import TechItem from '../TechItem';

const TechList = () => {
    const { isModalOpen, setIsModalOpen, techs } = useContext(AuthContext);

    return (
        <>
            <TecButton>
                <Title2>Tecnologias</Title2>
                <ButtonOpenModal onClick={() => setIsModalOpen(true)}>
                    <AiOutlinePlus />
                </ButtonOpenModal>
                {isModalOpen && <ModalTech />}
            </TecButton>
            <ContainerListTec>
                <ContainerListTecs>
                    {techs.map(({id, status, title, created_at, updated_at}) => (
                        <TechItem key={id} id={id} status={status} title={title} created_at={created_at} updated_at={updated_at}/>
                    ))}
                </ContainerListTecs>
            </ContainerListTec>
        </>
    );
};

export default TechList;
