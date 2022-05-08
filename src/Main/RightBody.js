export default function RightBody(){
  return (
    <div class="sidebar">
        <LoogedUser user="catanacomics" username="Catana" src="assets/img/catanacomics.svg"/>
        <div class="sugestoes">
            <SugestionsHeader />
            {AllSugestions().map(props =>
            <Sugestions user={props.user} userPic={props.userPic} reason={props.reason}/>
            )}
            <Links p="Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"/>
            <Copyright p="© 2021 INSTAGRAM DO FACEBOOK"/>
        </div>
    </div>
  )
}
function LoogedUser(props){
  return (
    <div class="usuario">
      <img src={props.src} alt ={props.src}/>
      <div class="texto">
        <strong>{props.user}</strong>
        {props.username}
      </div>
    </div>
  )
}
function SugestionsHeader(){
    return(
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    )
}
function AllSugestions(){
    const profileDetails = []
    const users = ["bad.vibes.memes", "chibirdart", "razoesparaacreditar", "adorable_animals", "smallcutecats"]
    const reasons = ["Segue você", "Segue você", "Novo no Instagram", "Segue você", "Segue você"]
    for(let i = 0; i < users.length; i++){
        profileDetails.push({user:users[i], userPic:`/assets/img/${users[i]}.svg`, reason:reasons[i]})
    }
    return profileDetails
}
function Sugestions(props){
  return(
    <div class="sugestao">
        <div class="usuario">
            <img src={props.userPic} alt={props.userPic}/>
            <div class="texto">
                <div class="nome">{props.user}</div>
                <div class="razao">{props.reason}</div>
            </div>
        </div>
        <div class="seguir">Seguir</div>
    </div>
  )
}
function Links(props){
  return(
    <div class="links">
      {props.p}
    </div>
  )
}
function Copyright(props){
  return(
    <div class="copyright">
      {props.p}
    </div>
  )
}