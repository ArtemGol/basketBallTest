import styled from "styled-components";
import { deviceMax } from "../Primitives";

export const SignFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  margin-top: 32px;
  margin-bottom: 24px;
`;

export const AddItemFormStyles = styled.form`
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  grid-gap: 13%;
  display: flex;
  justify-content: center;
  width: 100%;
  .secondColumn {
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
  }

  .double {
    width: 364px;
    display: flex;
    justify-content: space-between;
    grid-gap: 24px;
    .forBirthday {
      width: 66%;
    }
    button {
      width: 100%;
    }
  }

  @media screen and ${deviceMax.xl} {
    .secondColumn {
      width: 50%;
    }
    padding: 0 2%;
    grid-gap: 3%;
    .double {
      width: 100%;
    }
  }
  @media screen and ${deviceMax.md} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .secondColumn {
      width: 100%;
    }
  }
`;

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
  background: #9c9c9c;
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
