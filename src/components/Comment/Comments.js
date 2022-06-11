import React, { Component } from "react";
import CommentItem from "./CommentItem";

class Comments extends Component {
    state = {
        error: null,
        isLoaded: false,
        comments: []
    };

    componentDidMount() {
        fetch("http://localhost:3001/comments")
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
        if(error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <ul>
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
                </ul>
            )
        }
    }
}

export default Comments;