import styles from './style.module.css'
import { TagsSearch } from '../../components/TagsSearch/index';
import { UploadPhoto } from '../../components/UploadPhoto';

function CreateArticle() {
  return (
    <div className={styles.createArticle}>
        <div className={styles.createArticleContent}>
            <h1>New Article</h1>
            <input className={styles.titleArticleInput} type='text' placeholder='Title'/>
            <textarea className={styles.descArticleInput} type='text' placeholder='Description'/>
            <TagsSearch />
            <UploadPhoto />
        </div>
    </div>
  )
}

export default CreateArticle