import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerForm = styled.section`
    width: 370px;
    height: 720px;
    margin: auto;
    padding: 12px 22px;
    gap: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    background-color: var(--grey-3);
`;
export const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    .error{
        color: var(--color-error);
        font-size: 10px;
    }


    .title {
        width: 100%;
        height: 13%;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
    }
    select {
        display: flex;
        align-items: center;
        padding: 0px 14px;
        height: 48px;

        background: var(--grey-2);

        border: 1px solid var(--grey-2);
        border-radius: 4px;
        color: var(--grey-1);
    }
`;
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    padding: 0px 22px;

    width: 326px;
    height: 68px;

    background: var(--color-primary);

    border: 1px solid var(--color-primary);
    border-radius: 4px;
    color: var(--color-text);
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;  
    margin-top: 5px;

    button {
        align-items: center;
        padding: 0px 16px;
        gap: 10.15px;

        background: var(--grey-3);
        border-radius: 4px;
        border: 1px solid var(--grey-3);
        color: white;
    }
`;

const Linke = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 16px;
    background-color: var(--grey-3);
`;
export default Linke;


