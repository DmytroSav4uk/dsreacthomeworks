import {useEffect, useState} from "react";
import {getLaunches} from "../Services/Launch.api.server";
import Launch from "./Launch";

function Launches() {

    let [launches, setLaunches] = useState([]);


useEffect(() =>{
    getLaunches().then(value => {
        console.log(value)
        setLaunches(value.data)})
        .catch(err => {console.log(err)})
}, [])


return(
    <div className={'launches'}>
        {launches.map((item, index) => <Launch item ={item} key = {index}/>)}
    </div>
)

}


export default Launches;