import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

 export const App = () => (
   <div className="App">
     <ThemeContextProvider>
       <Navbar />
       <BookList />
     </ThemeContextProvider>
    </div>
  );

