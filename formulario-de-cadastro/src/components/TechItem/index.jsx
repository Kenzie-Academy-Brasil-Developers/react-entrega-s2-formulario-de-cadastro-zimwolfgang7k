import { Title3, Headline } from '../../style/typography';
import { TechCard } from './style';
import { AiFillDelete } from 'react-icons/ai';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const TechItem = ({ tech }) => {
    const { deleteTech } = useContext(AuthContext);

    return (
        <>
            <TechCard>
                <div className="div-content">
                    <Title3>{tech.title}</Title3>
                    <Headline style={{ color: 'grey' }}>{tech.status}</Headline>
                </div>
                <div className="button-container">
                    <button onClick={() => deleteTech(tech.id)}>
                        <AiFillDelete size={21} style={{ color: 'white' }} />
                    </button>
                </div>
            </TechCard>
        </>
    );
};

export default TechItem;
