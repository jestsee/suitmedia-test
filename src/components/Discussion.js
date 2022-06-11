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
                  <li><div className="numbers">{index}</div>
                    <a key={index} className={item.cName} href={item.url}>
                      {item.title}
                  </a></li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}