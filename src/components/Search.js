import React, { useContext } from 'react';
import { ArticleContext } from '../context/ArticleContext';
import { form, input, button } from '../styles/Search.module.css';

function Search(){
  const { searchInput, onChange, findArticle } = useContext(ArticleContext);
  return(
    
    <form onSubmit={findArticle} className={form}>
      <input 
      className={input} 
      type="text" 
      placeholder="search" 
      value={searchInput} 
      onChange={onChange}
      
      />

      <button className={button}>Find</button>
    </form>
  )
}
export default Search;