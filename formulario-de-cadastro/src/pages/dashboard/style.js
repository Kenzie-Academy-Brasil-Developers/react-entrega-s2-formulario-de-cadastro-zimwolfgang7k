import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
    width: 60.34px;
    height: 30.99px;
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
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 51px;


`;
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 118px;
    
    /* border-top: 1px solid var(--grey-0);
    border-bottom: 1px solid var(--grey-0); */
`;
export const ContainerDashboard = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0rem 1rem;
`;
export const Paragraph = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 23px;
    margin-top: 37px;
`
