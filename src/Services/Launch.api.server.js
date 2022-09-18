import axios from "axios";


let axiosInstance = axios.create({

    baseURL: 'https://api.spacexdata.com/v3/',
    headers: {'Content-Type': 'application/json',}


})


const getLaunches = () => {
  return axiosInstance.get('launches')


}

export {getLaunches};