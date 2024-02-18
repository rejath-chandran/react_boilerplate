import axios from "axios";

const BASE_URL=""

// mongodb+srv://rejath:B4Q63iD89YEbK170@db-mongodb-blr1-7f694c45.mongo.ondigitalocean.com/test?tls=true&authSource=admin

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