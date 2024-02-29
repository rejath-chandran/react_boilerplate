import axios from "axios";

const BASE_URL = "https://reqres.in/";

let headers = {
  "Content-Type": "application/json",
};

const axioInstance = axios.create({ baseURL: BASE_URL });
export const GetUsersApi = async ({ queryKey }) => {
  const [_, InitFunc] = queryKey;
  let data = (await axioInstance.get("api/users", { headers })).data;
  InitFunc(data.data);
  return data;
};
