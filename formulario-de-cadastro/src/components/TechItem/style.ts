import styled from 'styled-components';

export const TechCard = styled.li`
  width: 100%;
  background-color: var(--color-background);
  height: 49px;
  border-radius: 4px;
  position: relative;
  
  .div-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 58px 10px 30px;
  }
  .button-container{
    position: absolute;
    right: 10px;
    top: 10px;
  }
  button{
    border: none;
    background:transparent;
  }
` 