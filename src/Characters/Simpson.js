 function Simpson(props) {
    let {name, pic} = props;
    let classname = 'card';

    return (
        <div className={classname}>
            <h2>{name}</h2>
            <img src={pic} alt={'image'}/>
        </div>
    );
}

export default Simpson;