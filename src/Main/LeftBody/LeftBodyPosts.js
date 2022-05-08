import React from "react"
export default function Posts(){
    return(
      <div class="posts">
        {AllPostsInfos().map(props => 
          <div class="post">
              <PostHeader user={props.userPost} userPic={props.userPostPic}/>
              <PostContent post={props.postedPic} user={props.fristLike} userPic={props.fristLikePic} likeNumbers={props.likeNumbers}  />
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
        allPosts.push({userPost:postBy[i], userPostPic:`assets/img/${postBy[i]}.svg`, postedPic:`assets/img/${postedPic[i]}`, fristLike:fristLike[i], fristLikePic:`assets/img/${fristLike[i]}.svg`, likeNumbers:likeNumbers[i]})
    }
    return allPosts
}
function PostHeader(props){
    return(
        <div class="topo">
            <div class="usuario">
                <img src={props.userPic} alt={props.userPic}/>
                {props.user}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}
function PostContent(props){
    const [like, setLike] = React.useState("")
    const [heart, setHeart] = React.useState("heart-outline")
    function LikePost(){
    
        if(heart === "heart-outline"){
            setHeart("heart")
            setLike("like")
        } else {
            setHeart("heart-outline")
            setLike("")
        }
    }
    return(
        <div>
            <div class="conteudo">
                <img src={props.post} onClick={LikePost}/>
            </div>
            <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon onClick={LikePost} name={heart} class={"md hydrated " + like} ></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div class="curtidas">
                <img src={props.userPic} alt={props.userPic}/>
                <div class="texto">
                    Curtido por <strong>{props.user}</strong> e <strong>outras {props.likeNumbers} pessoas</strong>
                </div>
            </div>
        </div>
        </div>
    )
}

