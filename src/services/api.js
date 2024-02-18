import axios from "axios";

const BASE_URL=""

let headers = {
    "Content-Type": "application/json",
};
  

const axioInstance = axios.create({ baseURL: BASE_URL });

export const Get = async () => {
    let data = (await axioInstance.get("", { headers })).data;
    return data;
};

export const Post= async (data) => {
    return await axioInstance.post("", data, { headers });
  
};