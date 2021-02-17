import {articleItem, title, content, date, author} from '../styles/Article.module.css';

function Article({ data }) {


  return (
    <>
      <div className={articleItem}>
        <p className={title}>{data.title}</p>
        <p className={content}>{data.content}</p>
        <span className={date}>{data.date}</span>
        <span className={author}>{data.author}</span>
      </div>
    </>
  )
}
export default Article;