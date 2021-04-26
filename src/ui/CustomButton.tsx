import { ButtonStyles } from "../styles/uiStyles/ButtonStyles";
import add from "../assets/icon/add_24px.png";
import {FC} from "react";

export const CustomButton: FC<any> = (props) => {

    return (
    <ButtonStyles {...props}>
      {props.children}
      &ensp;
      {props.add && <img src={add} alt="add" />}
    </ButtonStyles>
  );
};
