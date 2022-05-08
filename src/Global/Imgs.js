export default function Imgs(props){
    let source = `/assets/img/${props.src}`
    return <img src={source} alt={props.src}/>
}