import './CommentItem.css';

export default function CommentItem({img, name, date, message, point, replies, isReply=false})  {
    console.log("img: ", img);
    return (
        <>
        <div className={!isReply ? "comment-item" : "comment-item reply"}>
            <img src={img}></img>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{message}</p>
            <div className='point-container'>
                <p>{point} point</p>
                <div className='vote'>
                    <span className="fa-solid fa-arrow-up"></span>
                </div>
                <div className='vote'>
                    <span className="fa-solid fa-arrow-down"></span>
                </div>
            </div>
        </div>
        {/* bikin agak menjorok */}
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
        </>
        // TODO tambahin upvote downvote
    )
}