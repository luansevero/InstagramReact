export default function Imgs(props){
    let source = "public/assets/img/" + props.src
    console.log(source)
    return(
        <img src={source} />
    )
}