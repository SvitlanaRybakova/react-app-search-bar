import React from 'react';
import Search from '../components/Search';
import { body, container, articleWrapper } from '../styles/Home.module.css';

function Home(){
  return(
    <>
    <div className={container}>
      <Search />
      <div className={articleWrapper}></div>
    </div>
    
    </>
    
  )
}
export default Home;