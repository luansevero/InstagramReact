import Icons from "../../Global/Icons"
import Imgs from "../../Global/Imgs"
export default function Posts(){
    const allPosts = [
        {postBy: "meowed", postByPic:"meowed.svg", postedPic:"gato-telefone.svg", fristLike:"respondeai", fristLikePic:"respondeai.svg", likeNumbers: "101.523"},
        {postBy: "barked", postByPic:"barked.svg", postedPic:"dog.svg", fristLike: "adorable_animals", fristLikePic:"adorable_animals.svg", likeNumbers: "99.159"}
    ]
    return(
      <div class="posts">
        {allPosts.map(props => 
          <div class="post">
              <PostHeader />
              <PostContent />
              <PostHeader />
          </div>
        )}
      </div>
    )
}
function PostHeader(props){
    return(
        <div class="topo">
            <div class="usuario">
                <Imgs src={props.postByPic} />
                {props.postBy}
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
            <Imgs src={props.postedPic} />
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
                <Imgs src={props.fristLikePic} />
                <div class="texto">
                    Curtido por <strong>{props.fristLike}</strong> e <strong>outras {props.likeNumbers} pessoas</strong>
                </div>
            </div>
        </div>
    )
}