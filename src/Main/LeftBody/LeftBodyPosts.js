import Icons from "../../Global/Icons"
import Imgs from "../../Global/Imgs"
export default function Posts(){
    return(
      <div class="posts">
        {AllPostsInfos().map(props => 
          <div class="post">
              <PostHeader user={props.userPost} userPic={props.userPostPic}/>
              <PostContent post={props.postedPic}/>
              <PostFooter user={props.fristLike} userPic={props.fristLikePic} likeNumbers={props.likeNumbers}/>
          </div>
        )}
      </div>
    )
}
function AllPostsInfos(){
    const allPosts = []
    const postBy = ["meowed", "barked"]
    const postedPic = ["gato-telefone.svg", "dog.svg"]
    const fristLike = ["respondeai", "adorable_animals"]
    const likeNumbers = ["101.523", "99.159"]
    for(let i = 0 ; i < postBy.length; i++){
        allPosts.push({userPost:postBy[i], userPostPic:`${postBy[i]}.svg`, postedPic:postedPic[i], fristLike:fristLike[i], fristLikePic:`${fristLike[i]}.svg`, likeNumbers:likeNumbers[i]})
    }
    return allPosts
}
function PostHeader(props){
    return(
        <div class="topo">
            <div class="usuario">
                <Imgs src={props.userPic} />
                {props.user}
            </div>
            <div class="acoes">
                <Icons name="ellipsis-horizontal" />
            </div>
        </div>
    )
}
function PostContent(props){
    return(
        <div class="conteudo">
            <Imgs src={props.post} />
        </div>
    )
}
function PostFooter(props){
    return(
        <div class="fundo">
            <div class="acoes">
                <div>
                    <Icons name="heart-outline" />
                    <Icons name="chatbubble-outline" />
                    <Icons name="paper-plane-outline" />
                </div>
                <div>
                    <Icons name="bookmark-outline" />
                </div>
            </div>
            <div class="curtidas">
                <Imgs src={props.userPic} />
                <div class="texto">
                    Curtido por <strong>{props.user}</strong> e <strong>outras {props.likeNumbers} pessoas</strong>
                </div>
            </div>
        </div>
    )
}