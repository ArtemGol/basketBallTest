import React, {FC, useState} from "react";
import addPhoto from "../../../assets/icon/addPhoto.png";
import {
  AddPhotoMainStyles,
  AddPhotoStyles,
} from "../../../styles/FormStyles/FormStyles";
import { Field } from "react-final-form";
import { required1 } from "./validarors";
import { ErrorStyles } from "./CustomField";

export const CustomFileField: FC<{name: string, player?: boolean, itemImage?: string}> = ({
                                                               name,
                                                               player,
                                                               itemImage,
                                                               ...props }) => {
  const [img, setImg] = useState<string | null>("");
  return (
      // @ts-ignore
    <Field name={name} validate={!itemImage && required1}>
      {({ input: { value, onChange, ...input }, meta }) => {
        const handleChange = ({ target }: any) => {
          const file = target.files[0];
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
          onChange(target.files);
        };
        return (
          <AddPhotoMainStyles>
            <AddPhotoStyles player={player}>
              <input
                {...input}
                type="file"
                onChange={handleChange}
                {...props}
              />

              <img src={addPhoto} alt="addPhoto" className={"addPhoto"} />
              {img || itemImage ? (
                <img
                  src={img ? img : itemImage}
                  alt="img"
                  className={"preview"}
                />
              ) : (
                ""
              )}
            </AddPhotoStyles>
            {meta.error && meta.touched && (
              <ErrorStyles>{meta.error}</ErrorStyles>
            )}
          </AddPhotoMainStyles>
        );
      }}
    </Field>
  );
};
