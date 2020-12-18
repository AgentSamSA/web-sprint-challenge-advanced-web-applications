import { axiosWithAuth } from "../utils/axiosWithAuth";

export const fetchColors = () => {
  return axiosWithAuth()
    .get("/colors")
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
