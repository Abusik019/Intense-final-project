import styles from './style.module.css'
import { tags } from '../../tags';

const copyTags = tags.map((tag) => {
    return { ...tag, name: `#${tag.name}` };
});

export const TagsSearch = ({ handleTagClick }) => {
    return (
        <ul className={styles.tagsContainer}>
            {copyTags.map((tag) => (
                <li key={tag.id}>
                    <button onClick={() => handleTagClick(tag.name)}>
                        {tag.name}
                    </button>
                </li>
            ))}
        </ul>
    );
};
