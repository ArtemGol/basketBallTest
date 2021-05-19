import { loginInstance } from "../baseRequest";

export const image = {
  save: (formData: FormData) => {
    return loginInstance
      .post("/Image/SaveImage", formData, {
        headers: {
          Authorization: `Bearer ` + localStorage.token
        },
      })
      .then((response) => {
        return response.data;
      });
  },
};
