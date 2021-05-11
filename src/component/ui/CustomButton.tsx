import { ButtonS } from "../../ui/ButtonS";
import add from "../../assets/icon/addForButton.png";
import {FC} from "react";

interface IProps {
    add?: boolean
    cancel?: boolean
    onClick?: (e: any) => void
    disabled?: boolean
}

export const CustomButton: FC<IProps> = (props) => (
    <ButtonS add={props.add} cancel={props.cancel} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
      &ensp;
      {props.add && <img src={add} alt="add" />}
    </ButtonS>
  )
