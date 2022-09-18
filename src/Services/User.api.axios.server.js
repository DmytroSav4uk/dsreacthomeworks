import axios from "axios";


let axiosInstance = axios.create({

baseURL: 'https://jsonplaceholder.typicode.com/',
headers: {'Content-Type': 'application/json',}
});


const getUsersAxios = () => {
    return axiosInstance.get('users');
}

const getUserAxios = (id) => {
    return axiosInstance.get('users/'+ id );
}


export {getUsersAxios, getUserAxios};