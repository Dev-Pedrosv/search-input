import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 350px;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 8px 12px;
  }

  span {
    position: relative;
    left: -30px;
    cursor: pointer;
  }
`;
