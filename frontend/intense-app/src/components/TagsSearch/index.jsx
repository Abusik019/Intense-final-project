import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from './../../store/slices/articles';

export const TagsSearch = ({ handleTagClick }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.articles.categories);
    
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    const copyTags = categories && categories.map((tag) => {
        return { ...tag, title: `#${tag.title}` };
    });    

    return (
        <ul className={styles.tagsContainer}>
            {copyTags.map((tag) => (
                <li key={tag.id}>
                    <button onClick={() => handleTagClick(tag.title)}>
                        {tag.title}
                    </button>
                </li>
            ))}
        </ul>
    );
};
