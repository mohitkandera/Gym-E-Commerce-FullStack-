import axios from "axios";

const BASE_URL = "https://localhost:7036/api/User"; // Apna API URL

const getToken = () => {
    return localStorage.getItem("token");
};

const authHeader = () => ({
    headers: {
        Authorization: `Bearer ${getToken()}`
    }
});

// Get All Users
export const getUsers = async () => {
    return await axios.get(BASE_URL, authHeader());
};

// Get User By Id
export const getUserById = async (id) => {
    return await axios.get(`${BASE_URL}/${id}`, authHeader());
};

// Add User
export const addUser = async (userData) => {
    return await axios.post(BASE_URL, userData, authHeader());
};

// Update User
export const updateUser = async (id, userData) => {
    return await axios.put(`${BASE_URL}/${id}`, userData, authHeader());
};

// Delete User
export const deleteUser = async (id) => {
    return await axios.delete(`${BASE_URL}/${id}`, authHeader());
};