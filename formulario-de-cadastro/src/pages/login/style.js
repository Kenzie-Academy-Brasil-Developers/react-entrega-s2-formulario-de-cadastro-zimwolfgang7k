import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerForm = styled.section`
    width: 369px;
    height: 502px;
    margin: auto;
    padding: 12px 22px;
    gap: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    background-color: var(--grey-3);

    .img-title{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 24px;

    width: 324px;
    height: 48px;

    background: var(--color-primary-negative);

    border: 1px solid var(--color-primary-negative);
    border-radius: 4px;
    color: var(--color-text);
`;
export const ButtonCadastro = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;

    width: 324px;
    height: 48px;

    background: var(--grey-1);

    border: 1px solid var(--grey-1);
    border-radius: 4px;
    color: var(--color-text);
`;
export const ContainerButtonCadastro = styled.section`
  margin-top: 20px;
  gap: 20px;
  height: 20%;
  display: flex;
  justify-content: center;
`
export const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;

    .error{
        color: var(--color-error);
        font-size: 10px;
    }

    .img-title{
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