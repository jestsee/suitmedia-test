export default function CommentItem({img, name, date, message, points: point, replies})  {
    return (
        <>
        <div className="comment-item">
            <img src={img}></img>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{message}</p>
            <p>{point} point</p>
        </div>
        {/* bikin agak menjorok */}
        {replies != null ? replies.map(
            item => (
                <CommentItem
                    key={item.id}
                    img="https://pbs.twimg.com/profile_images/1292632332/lorempixum_signet_400x400.png"
                    name={item.author}
                    date={item.date}
                    message={item.message}
                    points={item.point}
                    replies={item.replies}
                    />
            )
        ) : null}
        </>
        // TODO tambahin upvote downvote
    )
}