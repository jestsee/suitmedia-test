import React, { useState } from "react"
import './CommentItem.css';

export default function CommentItem({img, name, date, message, point, replies, isReply=false})  {
    let [voteCounter, setVoteCounter] = useState(point)

    const incrementVote = () => (setVoteCounter(++voteCounter))
    const decrementVote = () => (setVoteCounter(--voteCounter))
    
    console.log("img: ", img);
    return (
        <div className='comment-container'>
            <div className={!isReply ? "comment-item" : "comment-item reply"}>
                <img src={img}></img>
                <div className='comment-info'>
                    <h3>{name}</h3>
                    <p>{date}</p>
                    <p>{message}</p>
                    <div className='point-container'>
                        <p>{voteCounter} point</p>
                        <div className='up vote' onClick={incrementVote}>
                            <span className="fa-solid fa-arrow-up"></span>
                        </div>
                        <div className='down vote' onClick={decrementVote}>
                            <span className="fa-solid fa-arrow-down"></span>
                        </div>
                    </div>
                </div>
            </div>
            {replies != null ? replies.map(
            item => (
                <CommentItem
                    key={item.id}
                    img={item.avatar}
                    name={item.author}
                    date={item.date}
                    message={item.message}
                    point={item.point}
                    replies={item.replies}
                    isReply = {true}
                    />
                )
            ) : null}
        </div>
    )
}