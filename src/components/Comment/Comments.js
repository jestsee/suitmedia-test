import React, { Component } from "react";
import CommentItem from "./CommentItem";

class Comments extends Component {
    state = {
        error: null,
        isLoaded: false,
        comments: []
    };

    componentDidMount() {
        fetch("http://localhost:8000/comments")
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
                        // <li key={item.id}> {/* pake id apa pake indeks? */}
                        //     {/* TODO panggil CommentItem disini */}
                        //     {/* cek masih punya reply ga,
                        //     kalo masih, iterate replynya,
                        //     panggil CommentItem lagi*/}
                        //     {item.author} {item.message}
                        // </li>
                        <CommentItem
                        key={item.id}
                        img="https://pbs.twimg.com/profile_images/1292632332/lorempixum_signet_400x400.png"
                        name={item.author}
                        date={item.date}
                        message={item.message}
                        points={item.point}
                        replies={item.replies}
                        />
                    ))}
                </ul>
            )
        }
    }
}

export default Comments;