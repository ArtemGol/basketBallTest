import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Avenir', sans-serif;
    box-sizing: border-box;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .swal-overlay{
    background-color: rgba(0,0,0,0);
    outline: none;
  }
  .swal-overlay--show-modal{
    height: 12vh;
    width: 70%;
    left: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 720px) {
    .swal-overlay--show-modal{
      width: 100%;
      left: 0;
    }
    .successAlert{
      width: 100%;
      left: 10%;
    }
    .warningAlert{
      width: 100%;
      left: 10%;
    }
  }
  .successAlert{
    margin: 0;
    width: auto;
    background-color: #49CC90;
    height: 40px;
    position: absolute;
    top: 26px;
    right: 26px;
  }
  .warningAlert{
    margin: 0;
    width: auto;
    background-color: #FF5761;
    height: 40px;
    position: absolute;
    top: 26px;
    right: 26px;
  }
  .swal-content{
    padding: 0 16px;
    height: 100%;
    margin: 0;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .forSweetAlert {
    font-size: 16px;
    color: white;
  }
`;