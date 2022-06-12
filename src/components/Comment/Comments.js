import React, { Component } from "react";
import CommentItem from "./CommentItem";
import '../../css/styles.css'

class Comments extends Component {
    state = {
        error: null,
        isLoaded: false,
        comments: []
    };

    componentDidMount() {
        fetch("https://comments-json-server.herokuapp.com/comments")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        comments: result
                    })
                    console.log("ITEMS: ", this.state.comments);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const { error, isLoaded, comments: items } = this.state;
        var temp = null;
        if(error) {
            temp = <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            temp = <div>Loading...</div>
        } else {
            temp = (
                <div>
                    {items.map(item => (
                        <CommentItem
                        key={item.id}
                        img={item.avatar}
                        name={item.author}
                        date={item.date}
                        message={item.message}
                        point={item.point}
                        replies={item.replies}
                        />
                    ))}
                </div>
            )
        }
        return <div className="comment">
            {/* <h2 className="divider">Komentar</h2> */}
            <div className="divider">
                <h2 className='font-face-gmb'><span>Komentar</span></h2>
            </div>
            {temp}
        </div>
    }
}

export default Comments;