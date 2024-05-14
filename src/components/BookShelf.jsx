
const BookShelf = ({handleInputChange, newBook}) => {
  return (
  <div className="bookshelfDiv">
    <div className="formDiv">
      <h3>Add a Book</h3>
      <form>
        <label htmlFor="title">Title</label>

        <input 
          id="title"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}/>

        <label htmlFor="author">Author</label>

        <input 
          id="author"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div className="bookCardsDiv">
      {/* <ul>
      {books.map((book) => (
          <BookCard 
            title={book.title}
            author={book.author}
            key={book.title}
          />
      ))}
      </ul> */}
    </div>
  </div>
  );
}

export default BookShelf;