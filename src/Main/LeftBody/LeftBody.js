import Posts from "./LeftBodyPosts";
import Stories from "./LeftBodyStories";
export default function LeftBody(){
    return(
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    )
}