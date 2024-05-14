import {useState} from 'react';
import BookShelf from './components/BookShelf.jsx'; 



const App = () => {
  const [book, setBook] = useState([])
  const [books, setBooks] = useState([]);
  
  const [newBook, setNewBook] = useState({
    title:'',
    author:'',
  });

  const handleInputChange = (event) => {
    setNewBook({...newBook, [event.target.name]:event.target.value});
    setBooks([...books + newBook])
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    {books.map((book) => (
      <BookCard 
        title={book.title}
        author={book.author}
        key={book.title}
      />
  ))}
    // setNewBook({title: '', author: ''});
    console.log('this works')
  }

  return (
  <>
  <h1>My Bookshelf</h1>
  <BookShelf handleInputChange={handleInputChange} book={book} newBook={newBook} books={books}
  />
  </>
  );
};

export default App;