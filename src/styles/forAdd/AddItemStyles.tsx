import styled from "styled-components";
import { deviceMax } from "../Primitives";

export const HeadBlockAddItemStyles = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 32px;
  background: #ffffff;
  border-radius: 10px 10px 0 0;
  font-size: 14px;
  font-weight: bold;
  color: #707070;
  a {
    text-decoration: none;
    color: #e4163a;
  }
`;

export const AddItemStyles = styled.div`
  display: flex;
  padding: 48px 20px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  @media screen and ${deviceMax.md} {
    flex-direction: column;
    align-items: center;
  }
`;
