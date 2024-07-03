import styles from './style.module.css';
import articleImage from '../../assets/articleImage.png';
import profileImage from '../../assets/profile_picture.png';
import { ArticleComments } from '../../components/ArticleComments';
import toFavorite from '../../assets/toFavorite.svg';
import toDelete from '../../assets/toDelete.svg';
import toEdit from '../../assets/edit.svg';
import toLiked from '../../assets/toLiked.svg'

const article = {
    title: 'The World’s Most Dangerous Technology Ever Made.',
    author: 'Ralph Hawkins',
    date: 'May 7, 2019 (10 mins read)',
    tags: ['#technology', '#tech', '#career'],
    description: `
        Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore. Aliquip consectetur labore consectetur dolor exercitation est minim quis. Magna non irure qui ex est laborum nulla excepteur qui. Anim Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur proident ex commodo irure est.\n
        Nisi commodo qui pariatur enim sint laborum consequat enim in officia. Officia fugiat incididunt commodo et mollit aliqua non aute. Enim dolor eiusmod aliqua amet ipsum in enim eiusmod. Quis exercitation sit velit dui\n
        Est Lorem labore consectetur minim sit eu eiusmod mollit velit. Consectetur voluptate ex amet id eiusmod laborum irure. Aliquip ad qui id exercitation irure amet commodo nisi quis. Occaecat minim incididunt eiusmod nostrud veniam quis culpa.\n
        Nisi ipsum et consequat id deserunt excepteur. Cillum non pariatur culpa ut occaecat laboris eu. Ullamco ad Lorem et elit laboris eu qui irure nulla qui culpa et. Cupidatat sunt ipsum proident aute exercitation do tempor aliqua cupidatat quis non exercitation. Adipisicing do minim dolore nulla mollit. Adipisicing incididunt irure ipsum et in esse ipsum elit tempor.\n
        Aliquip mollit sunt qui irure. Irure ullamco Lorem excepteur dolor qui ea ad quis. Enim fugiat cillum enim ad occaecat sint qui elit labore mollit sunt laborum fugiat consequat. Voluptate labore sunt duis eu deserunt. Occaecat do ut ut labore cillum enim dolore ad enim enim id. Aliquip do veniam ad excepteur ad cillum qui deserunt nostrud sunt aliqua duis sunt occaecat. Laborum incididunt commodo ullamco proident quis.
    `
}

const author = {
    full_name: 'Arthur Black',
    nickname: '@arthurblack',
    bio: 'Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.',
}

function Article() {
  return (
    <div className={styles.article}>
        <div className={styles.articleContent}>
            <img src={articleImage} alt="Article" />
            <div className={styles.articleTextBlock}>
                <h1>{article.title}</h1>
                <h2>{article.author} • {article.date}</h2>
                <h3>{article.tags.join(' ')}</h3>
                <p dangerouslySetInnerHTML={{ __html: article.description.replace(/\n/g, '<br/>') }}></p>
                <div className={styles.articleActions}>
                    <button><img src={toFavorite}/></button>
                    <button><img src={toLiked}/></button>
                    <button><img src={toDelete}/></button>
                    <button><img src={toEdit}/></button>
                </div>
            </div>
            <div className={styles.aboutAuthor}>
                <h1>ABOUT THE AUTHOR</h1>
                <div className={styles.aboutAuthorContent}>
                    <img src={profileImage}/>
                    <div className={styles.authorBio}>
                        <h1>{author.full_name}</h1>
                        <h2>{author.nickname}</h2>
                        <p>{author.bio}</p>
                    </div>
                </div>  
            </div>
        </div>
        <ArticleComments />
        <div className={styles.otherArticles}>
            <div className={styles.prevArticle}>
                <button><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbElEQVR4nO3du0oDUQAG4fXtBAsVQlBsfG9RsUhh3sAbI4GAEpP6DJ75YPufnWK3ObvLkiRJkiQZCrgGnoEn4HzsmskBd8AnPx5Hb5oWf2PsPIzeNSWOx/gALkZvmw6w3t/833Zxbkdvmw7F8KAYHhTDg2J4UAwPiuFBMTwohgfF8KAYHhTDg2J4UAwPiuFBMTwohgfF8KAYHhTDg2J4UAwPiuFBMTwohgfF8KAYHhTDg2J4UAyPYogUQ6QYIsUQKYZIMUSA1YkDlqvR26YEvBZDAjgDtgdB3oDL0dumBdwAX0XxRTl8jrwDV6O3TasoQkURKopQUYSKIkRvXz4UxYei+FAUH4riQ1F8KIoPRfGhKD4UxYei+FAUH4riQ1F8KIoPRfGhKD4UxYei+FAUH4riQ1F8KIoPRfGhKD4UxYei+FAUH4riQ1F8gPsTB1H7ObEsysuwQVmORdl0XxzPlO3+6oMGSZIkSZb/7huT1IP0e/WwvgAAAABJRU5ErkJggg==" /></button>
                <h1>Go back: <span>Boom boom pow is et Letstrade.</span></h1>
            </div>
            <div className={styles.nextArticle}>
                <h1>Next up: <span>Lorem ipsum so Ceat Riak</span></h1>
                <button><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXUlEQVR4nO3dsWoCQRgA4csTRoLBwjx7wAQL0TdQmCAETHHWO2Tnq678Ybjlmv92WZIkSZLknwPegTNwBDaj55ka8AJceLgCu9FzTQ04/QlSlNGAt983oygWwHYlyg34GD3btIoiVBShoggVRagoQvT15UNRfCiKD0XxoSg+FMWHovhQFB+K4kNRfCiKD0XxoSg+FMWHovhQFB+K4kNRfCiKD0XxoSg+FMWHovhQFB+K4kNRfCiKD0XxoSg+FMUH2D1ZRG2PXhble9hAs2M9yNfouaZER5bu3yvXlZ35/ejZpkMxPCiGB8XwoBgeFMODYnhQDA+K4UExPCiGB8XwoBgeFMODYnhQDA+K4UExPCiGB8XwoBgeFMODYnhQDA+K4UExPCiGB8XwoBgeFMOjGCLFECmGSDFEiiFSDBHgtcuJRe6rxt0ULQIcu0vdd2QdgM/78+h5kiRJkmSZ3A+0DIVVO2ON/gAAAABJRU5ErkJggg==" /></button>
            </div>
        </div>
    </div>
  )
}

export default Article;
