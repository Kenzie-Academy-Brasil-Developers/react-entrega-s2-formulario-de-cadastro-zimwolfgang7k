import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ul, ol, li{
    list-style: none;
  }

  section, aside{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  :root {
    --color-background: #121214; 
    --grey-3: #212529;
    --grey-2: #343b41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F; 
    --color-primary-negative: #59323F; 
    --color-text: #FFF;
    --color-success: #3FE864;
    --color-error: #E83F5B;   
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background-color: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Inter';
  }
  button {
    cursor: pointer;
  }
`;
export const Container = styled.section`
    max-width: 1300px;
    margin: 0 auto;
    padding: 0rem 1rem;
    img {
        width: 110.06px;
        height: 21.21px;
    }
`;
export const Input = styled.input`
    display: flex;
    align-items: center;
    padding: 0px 16px;
    height: 48px;

    background: var(--grey-2);

    border: 1px solid var(--grey-2);
    border-radius: 4px;
    color: var(--color-text);

    &:focus {
        border: 1px solid var(--grey-0);
    }
    &:focus::placeholder {
        color: var(--grey-0);
    }
`;
