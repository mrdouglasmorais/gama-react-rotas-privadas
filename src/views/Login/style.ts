import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  background: #8c52e5;
  color: #fff;

  h1{
    text-align: center;
    margin-bottom: 12px;
  }

  .card{
    display: content;
    background: #f9f9f9;
    padding: 25px;
    border-radius: 12px;

    form{ 
      display: grid;

      input{
        margin: 5px;
        border-radius: 10px;
        text-align: center;
        padding: 2px;
        border: 2px #8c52e5 solid;
      }

      input[type="submit"]{
        cursor: pointer;
        background: #8c52e5;
        border-radius: 10px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        color: #fff;
        padding: 5px;
        border: none;
        transition: 0.5s;
        &:hover{
          background: #68de5a;
        }
      }
    }
  }
`