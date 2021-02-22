import {articleItem, title, content, date, author, titleWrapper, button} from '../styles/Article.module.css';
import { ArticleContext } from '../context/ArticleContext';
import { useContext } from 'react'

function Article({ data }) {

  const { showDeleteButton, hideDEleteButton } = useContext(ArticleContext);

  return (
    <>
      <div 
      className={articleItem}
      onMouseEnter={(e) => showDeleteButton(e)}
      onMouseLeave={(e) => hideDEleteButton(e)}
      >
        <div className={titleWrapper}>
          <p className={title}>{data.title}</p>
          <button className={button}>X</button>
        </div>
        
        <p className={content}>{data.content}</p>
        <span className={date}>{data.date}</span>
        <span className={author}>{data.author}</span>
      </div>
    </>
  )
}
export default Article;