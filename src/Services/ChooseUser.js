import {useEffect, useState} from "react";
import {getUserAxios} from "./User.api.axios.server";

export default function (){
let [user , setUser] = useState(null)
    let id = 1;


    const increment = () => {
        id++;
    }

    const decrement = () => {
        id--;
    }
    useEffect(()=>{

        getUserAxios(id).then(({data}) => {
            setUser(data)
        })


    },[])

    return(
        <div>

            <button onClick={() =>{increment(id)}}>next</button>
            <button onClick={() =>{decrement(id)}}>prev</button>


        </div>
    )
}