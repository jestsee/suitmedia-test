import CommentForm from "./Comment/CommentForm";
import Comments from "./Comment/Comments";
import Post from "./Post";
import '../css/styles.css'
import Discussion from "./Discussion";

export default function Content() {
    return (
        <div className="content-container">
            <div className="main-content vert-divider">
                <Post/>
                <Comments/>
                <CommentForm/>
            </div>
            <div className="side-content"><Discussion/></div>
        </div>
    )
}