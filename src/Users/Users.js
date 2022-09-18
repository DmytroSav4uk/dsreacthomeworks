import {useEffect, useState} from "react";
import {getUserAxios, getUsersAxios} from "../Services/User.api.axios.server";
import User from "./User";


function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj)
    }

    useEffect(() => {
        getUsersAxios()
            .then(value => {
                console.log(value)
                setUsers(value.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (<div className={'users'}>


        <div className={'userDetails'}>
        <h3>{user?.name} {user?.username}</h3>
        <h4>{user?.email} <br/> {user?.phone}</h4>
        <a href={user?.website}>{user?.website}</a>
        </div>


<div className={'usersWrap'}>
        {users.map((user, index) => <User
            item = {user}
            key = {index}
            lift ={lift}
        />)}
</div>
    </div>)
}


export default Users;