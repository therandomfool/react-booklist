import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import Book from './Book'
import {data} from './books'
import {greet} from './testing/testing'
// img: 'https://m.media-amazon.com/images/I/71+lh7jD7qL._AC_UL320_.jpg',



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