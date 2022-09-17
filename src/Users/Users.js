import {useEffect, useState} from "react";
import {getUserAxios, getUsersAxios} from "../Services/User.api.axios.server";
import User from "./User";

function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(1);


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

    return (




        <div className={'users'}>
            <div>{<input type="text" value={user} onChange={event => setUser(event.target.value)}/>}</div>
            {
                users.map((user, index) => <User
                    name={user.name}
                    id={user.id}
                    username={user.username}
                    email={user.email}
                    phone = {user.phone}
                    website = {user.website}
                />)
            }

        </div>
    )
}


export default Users;