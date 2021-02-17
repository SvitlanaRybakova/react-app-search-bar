import React, { useContext } from 'react';
import { form, input, button } from '../styles/Search.module.css'
function Search(){
  return(
    <form action="" className={form}>
      <input className={input} type="text" placeholder="search"/>
      <button className={button}>Find</button>
    </form>
  )
}
export default Search;