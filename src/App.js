import React from 'react';
import Home from './pages/Home';
import ArticleContextProvider from './context/ArticleContext';

function App() {
  return (
    <div className="App">
      <ArticleContextProvider>
        <Home/>
      </ArticleContextProvider>
      
    </div>
  );
}

export default App;
