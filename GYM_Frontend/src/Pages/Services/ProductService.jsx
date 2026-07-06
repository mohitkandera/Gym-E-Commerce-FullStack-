import axios from 'axios';

const API_URL = "https://localhost:7036/api/Product";

export const getProducts = async() => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const addProuduct = async(product) => {
    const token = localStorage.getItem("token");

    return axios.post(API_URL, product,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
}