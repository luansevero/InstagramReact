import Icons from "../../Global/Icons"
import Imgs from "../../Global/Imgs"
export default function Stories(){
    return(
        <div class="stories">
            {AllStorys().map( props =>
                <Story user={props.user} source={props.src} />
            )}
            <div class="setinha">
              <Icons name="chevron-forward-circle" />
            </div>
        </div>
    )
}
function AllStorys(){
    const users = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics","respondeai", "filomoderna", "memeriagourmet"]
    const allStorys = []
    for(let i = 0; i < users.length;i++){
        allStorys.push({user:users[i], src:`${users[i]}.svg`})
    }
    return allStorys
}
function Story(props){
    return (
        <div class="story">
                <div class="imagem">
                    <Imgs src={props.source} />
                </div>
                <div class="usuario">
                {props.user}
                </div>
        </div>
    )
}