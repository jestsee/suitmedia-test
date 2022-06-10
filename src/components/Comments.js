import React, { Component } from "react";

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
                        <li key={item.id}>
                            {item.author} {item.message}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export default Comments;