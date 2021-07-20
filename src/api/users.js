import axios from "axios"

const url = 'https://jsonplaceholder.typicode.com'

export const getUsers = async () => {
    const usersData = await axios
        .get(`${url}/users`)
        .catch("Error!!")
    return await usersData.data;
}

export const getUsersDetails = async (id) => {
    const usersData = await axios
        .get(`${url}/users/${id}`)
        .catch("Error!!")
    return await usersData.data;
}

export const getPosts = async (id) => {
    const usersData = await axios
        .get(`${url}/posts?userId=${id}`)
        .catch("Error!!")
    return await usersData.data;
}

