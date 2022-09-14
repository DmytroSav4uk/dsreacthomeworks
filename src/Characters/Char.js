const Har = (props) => {
    let {id ,name,status,species,gender,image} = props;
    return (
        <div className='char'>
            <img src={image}   alt={'image'}/>

            <div className='info'>
            <h1>{id} - {name}</h1>
            <h2>{status}</h2>
            <p>{species} - {gender}</p>
            </div>
        </div>
    )
}

export default Har;