import styled from 'styled-components';

export const ContainerListTec = styled.section`
    max-width: 1120px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    border-radius: 4px;
    background-color: var(--grey-3);
    padding: 40px 0px;
    margin-bottom: 40px;
`;
export const TecButton = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    justify-content: space-between;
`;
export const ButtonOpenModal = styled.button`
    width: 32px;
    height: 32px;
    border: 1px solid var(--grey-3);
    background: var(--grey-3);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--grey-0);
    border-radius: 4px;

    font-family: 'Inter';
    font-weight: 600;
    font-size: 10px;
`;
export const ContainerListTecs = styled.ul`
    width: 90%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
