import "./App.css";
import CommentForm from "./components/Comment/CommentForm";
import Comments from "./components/Comment/Comments";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Post/>
      <Comments/>
      <CommentForm/>
    </div>
  );
}

export default App;
