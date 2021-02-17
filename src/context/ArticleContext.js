import { createContext, useEffect, useState } from 'react';

export const ArticleContext = createContext();

function ArticleContextProvider(props) {

  const [searchInput, setSearchInpit] = useState('');
  const [articles, setArticle] = useState([
    {
      id: 1,
      title: 'JS makes me cry',
      content: 'For this example, I’d like to render the search bar in my Pet List component, which holds my collection of pets pets array that is in State. This Pet List component receives the Pets from its parent component, the Pet Container, where the State is passed down as props to the Pet List component To create the search bar, we write the following html inside JSX to render First create a JSX fragment tag to hold your element. Next, write an HTML label tag. Include an htmlFor attribute.',
      date: '2020-12-02',
      author: 'super mario'
    },
    {
      id: 2,
      title: 'Will your search bar be in the same component in which your state lives? Or will your state be in the parent?',
      content: 'If your Search bar renders in a child component, you’ll still need to have an onChange event handler for the state of the inputs. Where will that live? If it’s in your parent, you’ll send the function down as props.',
      date: '2020-11-12',
      author: 'super mario'
    },
    {
      id: 3,
      title: 'Create an input value for your search field in your State object.',
      content: 'For example, I set the input value to an empty string in State in the parent component: Hot tip! Remember to console log! you can be sure you’re making the proper connections from the parent to the child and receiving the value of your event target on the input.',
      date: '2020-10-25',
      author: 'super mario'
    },
    {
      id: 4,
      title: 'Pass down the props and test along the way!',
      content: 'To test at this point, make sure you pass down the state as props for input value and also the handle on change function for the input field of the search bar as props to the child component, like so:',
      date: '2019-10-22',
      author: 'super mario'
    },
    {
      id: 5,
      title: 'And now, for the real fun. Actually searching!',
      content: 'We’re going to create a variable named Filtered Pets, whose return value will be an array of filtered pets, filtered based on the input value key from the state that’s been updated by the on change handler that’s invoked in the input field of the search bar. MDN explains that “The filter() method creates a new array with all elements that pass the test implemented by the provided function.” We’ll be sure to define this variable after the render lifecycle method in our Pet Container class component and before the return statement. We’ll use the variable inside the return method to pass down as an argument to our callback function for the sort handler, which we’re passing down as props to the Pet List child component. This is so we can have the array of pets in state of the parent (pet container) available as props to the child (Pet List) and so this array will be both sorted and filtered for search, depending on if that’s so.',
      date: '2020-12-02',
      author: 'super mario'
    }

  ])

  const findArticle = (e) => {
    e.preventDefault();
    console.log(searchInput.length);
    console.log(articles);

    if (searchInput.length > 0) {
      const filtered = articles.filter(item => {
        return item.title.toLowerCase().includes(searchInput.toLowerCase())
      })
      if (Object.keys(filtered).length > 0){
          setArticle(filtered);
      }
      
    }
    else{
      console.log('empty input');
      setArticle(articles);
    }

    setSearchInpit('');
  }

  const onChange = (e) => {
    setSearchInpit(e.target.value);
    console.log(searchInput);
  }

  // function search(){
  //  
  // }

  return (
    <ArticleContext.Provider value={{ articles, searchInput, onChange, findArticle }}>
      {props.children}
    </ArticleContext.Provider>
  )
}
export default ArticleContextProvider;