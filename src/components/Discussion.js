import './Discussion.css'
import { DiscussionItems } from "./DiscussionItem";

export default function Discussion () {
  return (
    <div className="discussion-container">
      <h2>Diskusi 5 teratas</h2>
      <div className="discussion-list">
        <ul>
          { DiscussionItems.map((item, index) => {
              return (
                  <li key={index} >
                    <div className="numbers">{index+1}</div>
                    <div className={item.cName}>
                      <a href={item.url}>
                        {item.title}
                      </a>
                    </div>
                  </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}