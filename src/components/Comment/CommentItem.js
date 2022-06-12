import React, { useState } from "react"
import './CommentItem.css';

export default function CommentItem({img, name, date, message, point, replies, isReply=false})  {
    let [voteCounter, setVoteCounter] = useState(point)
    const [upvoted, setUpvoted] = useState(false)
    const [downvoted, setDownvoted] = useState(false)

    const incrementVote = () => {
        if(!upvoted && !downvoted) {
            setVoteCounter(++voteCounter)
            setUpvoted(true)
        }
    }
    const decrementVote = () => {
        if(!upvoted && !downvoted) {
            setVoteCounter(--voteCounter)
            setDownvoted(true)
        }
    }
    
    console.log("img: ", img);
    return (
        <div className='comment-container'>
            <div className={!isReply ? "comment-item" : "comment-item reply"}>
                <img src={img}></img>
                <div className='comment-info'>
                    <h3 className="name-date font-face-gmb">{name}</h3>
                    <p className="name-date font-face-gm">{new Intl.DateTimeFormat('id', {year: 'numeric', month: 'long',day: '2-digit', hour: 'numeric', minute: 'numeric'}).format(new Date(date))}</p>
                    <p className='font-face-gm'>{message}</p>
                    <div className='point-container'>
                        <p className='font-face-gm'>{voteCounter} point</p>
                        <div className={upvoted && !downvoted ? 'upvoted vote' :'up vote'} onClick={incrementVote}>
                            <span className="fa fa-arrow-up"></span>
                        </div>
                        <div className={!upvoted && downvoted ? 'downvoted vote' :'down vote'} onClick={decrementVote}>
                            <span className="fa fa-arrow-down"></span>
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