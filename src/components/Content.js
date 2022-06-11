import CommentForm from "./Comment/CommentForm";
import Comments from "./Comment/Comments";
import Post from "./Post";
import '../css/styles.css'

export default function Content() {
    return (
        <div className="content-container">
        <Post/>
        <Comments/>
        <CommentForm/>
        </div>
    )
}