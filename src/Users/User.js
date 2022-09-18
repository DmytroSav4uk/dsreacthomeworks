



function User (props) {
    let {item:user,lift} = props;

    return (
        <div className={'user'}>




            <h2> {user.id}--{user.name} "{user.username}"</h2>
            <button onClick={()=>{lift(user)}}>{'details'}</button>


        </div>
    )
}

export default User;




