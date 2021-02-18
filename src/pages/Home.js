import React, { useContext } from 'react';
import Article from '../components/Article';
import Search from '../components/Search';
import { container, articleWrapper } from '../styles/Home.module.css';
import { ArticleContext } from '../context/ArticleContext';
import NotFound from '../components/NotFound';



function Home() {
  const { articles } = useContext(ArticleContext);
  const { isNecessaryArticle } = useContext(ArticleContext);

  return (
    <>
      <div className={container}>
        <Search />
        <div className={articleWrapper}>
          {isNecessaryArticle ?
            articles.map(value => <Article key={value.id} data={value} />)
            : <NotFound />}

        </div>
      </div>

    </>

  )
}
export default Home;