import styled from 'styled-components';

export const ContainerModal = styled.section`
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    inset: 0;
    margin: 0 auto;
    padding: 0rem 1rem;

    z-index: 99999;

    .button-close {
        background: none;
        border: none;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .error {
        color: var(--color-error);
        font-size: 10px;
    }

    select {
        display: flex;
        align-items: center;
        padding: 0px 12px;
        height: 38px;
        width: 100%;

        background: var(--grey-2);

        border: 1px solid var(--grey-2);
        border-radius: 4px;
        color: var(--grey-0);
    }
    input {
        height: 38px;
    }
    .modal-box {
        background-color: var(--grey-3);
        width: 366px;
        height: 292px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 0rem 23px;
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
    }
    .modal-box--title {
        background-color: var(--grey-2);
        height: 50px;
        width: 100%;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 23px;
        border-radius: 4px;
    }
    .modal-box--content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 40px;
    }
`;

export const ButtonAddTec = styled.button`
    width: 324px;
    height: 48px;
    background-color: var(--color-primary);
    color: white;
    border: 1px solid var(--color-primary);
    border-radius: 4px;

    font-family: 'Inter';

    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;
`;
