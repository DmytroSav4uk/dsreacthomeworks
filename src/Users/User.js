function User (props) {
    let {id, name, username, email, phone, website} = props;

    return (
        <div className={'user'}>
            <h2> {id}--{name} "{username}"</h2>
            <h2>email:{email} </h2>
            <h3>phone:{phone}</h3>
            <a href={website}>{website}</a>


        </div>
    )
}

export default User;




