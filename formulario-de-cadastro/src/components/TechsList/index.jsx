import { Title2 } from '../../style/typography';
import {
    ButtonOpenModal,
    ContainerListTec,
    ContainerListTecs,
    TecButton,
} from './style';
import { AiOutlinePlus } from 'react-icons/ai';
import { AuthContext } from '../../contexts/AuthContext';
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
                    {techs.map(tech => (
                        <TechItem tech={tech} key={tech.id} />
                    ))}
                </ContainerListTecs>
            </ContainerListTec>
        </>
    );
};

export default TechList;
