function Launch(props){
    let {item} = props

if (item.launch_year != 2020){
    return(
        <div className={'launch'}>
            <h1>{item.mission_name}</h1>
            <h3>launch year: {item.launch_year}</h3>
            <img src={item.links.mission_patch_small} alt={'image'}/>
        </div>
    )
}
}
export default Launch;