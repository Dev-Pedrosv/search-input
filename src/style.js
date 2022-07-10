import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
}
`;

export const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgb(0 0 0 / 49%);
  padding: 20px 200px;
`;

export const Container = styled.div`
  width: 500px;
  min-height: 350px;
  padding: 20px;
  background-color: #484646;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  h1 {
    margin-bottom: 20px;
    color: #fff;
  }
`;

export const Spacer = styled.div`
  margin: 20px;
`;
