import {useState} from 'react'

const BookShelf = () => {
  
    const [header, setHeader] = useState("add a book")
    const [books, setBooks] = useState([
      { title: 'Fourth Wing', author: 'Rebecca Yarros' },
      { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    
    const [newBook, setNewBook] = useState({
      title:'',
      author:'',
    });
  
    const handleInputChange = (event) => {
      setNewBook({...newBook, [event.target.name]:event.target.value});
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setBooks([...books, newBook]);
      setHeader(`Book added: ${newBook.title} by ${newBook.author}`);
      setNewBook({
        title: '', author: ''}
      );
    };

  return (
  <div className="bookshelfDiv">
    <div className="formDiv">
      <h2>{header}</h2>

      <form onSubmit = {handleSubmit}>
        <label htmlFor="title">Title</label>

        <input 
          id="title"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
          />

        <label htmlFor="author">Author</label>

        <input 
          id="author"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
          />

        <button type="submit">Submit</button>
      </form>
    </div>
    <div className="bookCardsDiv">
      {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </div>
        ))};
      
  </div>

  </div>
  );
}
 


export default BookShelf;