import { Title3, Headline } from '../../style/typography';
import { TechCard } from './style';
import { AiFillDelete } from 'react-icons/ai';
import { useContext } from 'react';
import { AuthContext, ITechsUser, IUser } from '../../contexts/AuthContext';

const TechItem = ({status, id, title}: ITechsUser) => {
    const { deleteTech, techs} = useContext(AuthContext);

    return (
        <>
            <TechCard>
                <div className="div-content">
                    
                    <Title3>{title}</Title3>
                    <Headline style={{ color: 'grey' }}>{status}</Headline>
                </div>
                <div className="button-container">
                    <button onClick={() => deleteTech(id)}>
                        <AiFillDelete size={21} style={{ color: 'white' }} />
                    </button>
                </div>
            </TechCard>
        </>
    );
};

export default TechItem;
