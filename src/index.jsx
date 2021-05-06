import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import {data} from './books'
// img: 'https://m.media-amazon.com/images/I/71+lh7jD7qL._AC_UL320_.jpg',



function BookList() {
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

const Book = (props) => {
  const {img, title, author} = props
  const clickHandler = () => {
    alert('hello world')
  }
  const complexExample = (author) => {
      console.log(author)
  }
  return <article>
    <img src={img} alt='' />
    <h1 onClick={() =>{
      console.log(title)
    }}>{title}</h1>
    <h4>{author}</h4>
    <button type='button' onClick={clickHandler}>EXAMPLE</button>
    <button type ='button' onClick= {() => complexExample(author)}>more complex example</button>
  </article>
}


ReactDOM.render(<BookList />, document.getElementById('root'));