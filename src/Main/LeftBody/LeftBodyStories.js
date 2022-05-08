export default function Stories(){
    return(
        <div class="stories">
            {AllStorys().map( props =>
                <Story user={props.user} source={props.src} />
            )}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle" ></ion-icon>
            </div>
        </div>
    )
}
function AllStorys(){
    const users = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics","respondeai", "filomoderna", "memeriagourmet"]
    const allStorys = []
    for(let i = 0; i < users.length;i++){
        allStorys.push({user:users[i], src:`assets/img/${users[i]}.svg`})
    }
    return allStorys
}
function Story(props){
    return (
        <div class="story">
                <div class="imagem">
                    <img src={props.source} alt="props.source"/>
                </div>
                <div class="usuario">
                {props.user}
                </div>
        </div>
    )
}