import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import Book from './Book'
import {data} from './books'
import {greet} from './testing/testing'



function BookList() {
  console.log(greet)
  return (
    <section className='booklist'>
      {data.map((book) => {
        
        return (
          <Book key={book.id} {...book}></Book>
        )
      })}

    </section>
  )
}




ReactDOM.render(<BookList />, document.getElementById('root'));