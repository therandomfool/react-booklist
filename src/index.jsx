import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// img: 'https://m.media-amazon.com/images/I/71+lh7jD7qL._AC_UL320_.jpg',

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/91wtqxlMHdL._AC_UL320_.jpg',
  title: 'The Overstreet Comic Book Price',
  author: 'Robert M. Overstreet'
}
const secondBook = {
  img: 'https://m.media-amazon.com/images/I/71+lh7jD7qL._AC_UL320_.jpg',
  title: 'Cloudbuster Nine',
  author: 'Anne R. Keene'
}


function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ea, ipsam veniam iure odit molestias illo quasi in architecto nesciunt?</p>
        </Book>
      <Book
        img={secondBook.img} 
        title={secondBook.title} 
        author={secondBook.author} />

    </section>
  )
}

const Book = ({img, title, author, children}) => {
  // const {img, title, author} = props
  return <article>
    <img src={img} alt='' />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </article>
}


ReactDOM.render(<BookList />, document.getElementById('root'));