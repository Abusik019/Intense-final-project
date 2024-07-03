import styles from './style.module.css'
import testAva from '../../assets/oval.png'

export const ArticleComments = () => {
  return (
    <div className={styles.articleComments}>
        <div className={styles.comment}>
             <div className={styles.commentLikes}>
                <button>+</button>
                <h1>12</h1>
                <button>-</button>
            </div>
            <div className={styles.commentContent}>
                <div className={styles.commentInfo}>
                    <div className={styles.commentInfoWrapper}>
                        <img src={testAva}/>
                        <h1>amyrobson</h1>
                        <h2>1 month ago</h2>
                    </div>
                    <button className={styles.reply}>Reply</button>
                </div>
                <p className={styles.commentDescription}>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.</p>
            </div>
        </div>
        <div className={styles.childComment}>
            <div className={styles.decorateLine}></div>
            <div className={styles.commentLikes}>
                <button>+</button>
                <h1>4</h1>
                <button>-</button>
            </div>
            <div className={styles.commentContent}>
                <div className={styles.commentInfo}>
                    <div className={styles.commentInfoWrapper}>
                        <img src={testAva}/>
                        <h1>amyrobson</h1>
                        <h2>1 month ago</h2>
                    </div>
                    <div className={styles.changeComment}>
                        <button className={styles.changeCommentDelete}>Delete</button>
                        <button className={styles.changeCommentEdit}>Edit</button>
                    </div>
                </div>
                <p className={styles.commentDescription}>@maxblagun If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.</p>
            </div>
        </div>
    </div>
  )
}
