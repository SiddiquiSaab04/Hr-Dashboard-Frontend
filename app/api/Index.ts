
import axios from "axios";

export default async function getAxiosInstance() {

    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        headers: {
            "Content-Type": "application/json",
        }
    });
    
}
