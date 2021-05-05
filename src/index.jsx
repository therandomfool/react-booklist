import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


function BookList(){
  return(
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      
    </section>
  )
}

const Book = () => {
  return <article>
    <Image />
    <Title />
    <Author />
  </article>
}

const Image = () => <img src='https://m.media-amazon.com/images/I/91wtqxlMHdL._AC_UL320_.jpg' alt=''/>

const Title = () => <h1>The Overstreet Comic Book Price</h1>

const Author =  () => <h4>Robert M. Overstreet</h4>


ReactDOM.render(<BookList />, document.getElementById('root'));