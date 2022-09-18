import {useEffect, useState} from "react";
import {getUserAxios} from "./User.api.axios.server";

export default function ChooseUser() {
    let [user, setUser] = useState(null)
    let [id, setId] = useState(1);
    let [style, setStyle] = useState('notdisplay')

    const changeStyle = () => {
        setStyle('display')
    }

    const hide = () => {
        setStyle('notdisplay')
    }

    const increment = () => {
        id++;
        setId(id)
    }
    const decrement = () => {
        id--;
        setId(id)
    }

    useEffect(() => {
        getUserAxios(id).then(({data}) => {
            setUser(data)
        })
    }, [id])

    return (
        <div className={'experiments'}>
            <div className={'user'}>
                <h2> {user?.id}--{user?.name} "{user?.username}"</h2>
                <button onClick={changeStyle}>{'show details'}</button>
            </div>
            <button onClick={() => {
                decrement(id)
            }}>prev
            </button>
            <button onClick={() => {
                increment(id)
            }}>next
            </button>
            <div className={style}>
                <h3>{user?.name} {user?.username}</h3>
                <h4>{user?.email} <br/> {user?.phone}</h4>
                <a href={user?.website}>{user?.website}</a>
                <button onClick={hide}>hide details</button>
            </div>
        </div>
    )
}