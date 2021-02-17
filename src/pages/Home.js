import React,  { useContext } from 'react';
import Article from '../components/Article';
import Search from '../components/Search';
import { container, articleWrapper } from '../styles/Home.module.css';
import { ArticleContext } from '../context/ArticleContext';

function Home(){
  const { articles } = useContext(ArticleContext);
  console.log(articles);

  return(
    <>
    <div className={container}>
      <Search />
      <div className={articleWrapper}>
        {articles.map(value => <Article key={value.id} data={value} />)}
         
          
         
          
       
      
      </div>
    </div>
    
    </>
    
  )
}
export default Home;