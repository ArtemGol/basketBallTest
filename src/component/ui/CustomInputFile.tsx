import React, {useState} from 'react'
import addPhoto from "../../assets/icon/addPhoto.png";
import styled from "styled-components";
import {deviceMax, theme} from "../../assets/constants/primitives";
import {ErrorStyles} from "../../pages/signIn/SignIn";

interface IProps {
    errors?: any
    name: string
    type: string
    player?: boolean
    defaultValue?: string
    setValue?: any
}

export const CustomInputFile = ({
        name,
        type,
        player,
        defaultValue,
        setValue,
        errors
    }: IProps) => {
    const [img, setImg] = useState<string | null>("")

    const handleChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.addEventListener(
                "load",
                () => {
                    reader?.result && setImg(reader.result.toString());
                },
                false
            );
            reader.readAsDataURL(file);
        }
        setValue && setValue(player ? 'avatarUrl' : 'imageUrl', e.target.files[0], { shouldValidate: true });
    }
    return (
        <AddPhotoMainStyles>
            <AddPhotoStyles player={player}>
                <input type={type}
                       name={name}
                       onChange={handleChange}
                />
                <img src={addPhoto} alt="addPhoto" className={"addPhoto"}/>
                {img || defaultValue
                    ? <img
                        src={img ? img : defaultValue}
                        alt="img"
                        className={"preview"}
                    />
                    : ""
                }
            </AddPhotoStyles>
            {errors &&
                <ErrorStyles>Required</ErrorStyles>
            }
        </AddPhotoMainStyles>
    );
}

export const AddPhotoMainStyles = styled.div`
  min-width: 200px;
  width: 320px;
  height: 250px;
  display: flex;
  flex-direction: column;
  @media screen and ${deviceMax.md} {
    margin: 0;
    width: 30%;
  }
`;

export const AddPhotoStyles = styled.label<{player?: boolean}>`
  border-radius: 4px;
  background: ${theme.lightGrey};
  opacity: 0.5;
  display: flex;
  align-items: ${(props) => (props.player ? "flex-end;" : "center;")};
  justify-content: center;
  min-width: 200px;
  height: 250px;
  position: relative;
  cursor: pointer;

  input {
    display: none;
  }

  .preview {
    border-radius: 4px;
    width: ${(props) => (props.player ? "100%" : "150px;")};
  }

  .addPhoto {
    top: 30%;
    position: absolute;
    z-index: 1;
  }

  @media screen and ${deviceMax.xl} {
    height: 240px;
    .preview {
      width: ${(props) => (props.player ? "100%;" : "120px;")};
    }
  }
  @media screen and ${deviceMax.md} {
    height: 150px;
    width: 185px;
    .preview {
      width: ${(props) => (props.player ? "100%;" : "100px;")};
    }
    .addPhoto {
      width: 41px;
      top: 35%;
    }
  }
`;