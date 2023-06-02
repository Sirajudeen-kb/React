import { useState} from "react";


// Book data
const bookData = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    subject: "Classic Literature",
    publish: "1925",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    subject: "Classic Literature",
    publish: "1960",
  },
  {
    title: "1984",
    author: "George Orwell",
    subject: "Dystopian Fiction",
    publish: "1949",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    subject: "Classic Literature",
    publish: "1813",
  },

  {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      subject: "Classic Literature",
      publish: "1951",
    },
    {
      title: "To the Lighthouse",
      author: "Virginia Woolf",
      subject: "Modernist Literature",
      publish: "1927",
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      subject: "Classic Literature",
      publish: "1851",
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      subject: "Fantasy",
      publish: "1954-1955",
    },
    {
      title: "The Odyssey",
      author: "Homer",
      subject: "Epic Poetry",
      publish: "8th century BCE",
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      subject: "Dystopian Fiction",
      publish: "1932",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      subject: "Fantasy",
      publish: "1937",
    },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      subject: "Magical Realism",
      publish: "1967",
    },
    {
      title: "The Great Expectations",
      author: "Charles Dickens",
      subject: "Classic Literature",
      publish: "1861",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      subject: "Fiction",
      publish: "1988",
    },
    {
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      subject: "Gothic Fiction",
      publish: "1890",
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      subject: "Psychological Fiction",
      publish: "1866",
    },
    {
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      subject: "Children's Literature",
      publish: "1943",
    },
    {
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      subject: "Classic Literature",
      publish: "1877",
    },
    {
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      subject: "Historical Fiction",
      publish: "2003",
    },
    {
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      subject: "Gothic Fiction",
      publish: "1847",
    },
    {
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      subject: "Adventure Fiction",
      publish: "1844",
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      subject: "Gothic Fiction",
      publish: "1818",
    },
    {
      title: "Beloved",
      author: "Toni Morrison",
      subject: "Historical Fiction",
      publish: "1987",
    },
    {
      title: "The Scarlet Letter",
      author: "Nathaniel Hawthorne",
      subject: "Romanticism",
      publish: "1850",
    },
    {
      title: "The Adventures of Huckleberry Finn",
      author: "Mark Twain",
      subject: "Adventure Fiction",
      publish: "1884",
    },
    {
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      subject: "Philosophical Fiction",
      publish: "1880",
    },
    {
      title: "The Grapes of Wrath",
      author: "John Steinbeck",
      subject: "Historical Fiction",
      publish: "1939",
    },
    {
      title: "Wuthering Heights",
      author: "Emily Brontë",
      subject: "Gothic Fiction",
      publish: "1847",
    },
    {
      title: "Slaughterhouse-Five",
      author: "Kurt Vonnegut",
      subject: "Science Fiction",
      publish: "1969",
    },
    {
      title: "The Divine Comedy",
      author: "Dante Alighieri",
      subject: "Epic Poetry",
      publish: "1320",
    },
    {
      title: "The Sun Also Rises",
      author: "Ernest Hemingway",
      subject: "Modernist Literature",
      publish: "1926",
    },
    {
      title: "A Tale of Two Cities",
      author: "Charles Dickens",
      subject: "Historical Fiction",
      publish: "1859",
    },
    {
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      subject: "Fantasy",
      publish: "1950-1956",
    },
    {
      title: "The Stranger",
      author: "Albert Camus",
      subject: "Existential Fiction",
      publish: "1942",
    },
    {
      title: "Les Misérables",
      author: "Victor Hugo",
      subject: "Historical Fiction",
      publish: "1862",
    },
    {
      title: "Gone with the Wind",
      author: "Margaret Mitchell",
      subject: "Historical Fiction",
      publish: "1936",
    },
    {
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      subject: "Dystopian Fiction",
      publish: "1985",
    },
    {
      title: "1984",
      author: "George Orwell",
      subject: "Dystopian Fiction",
      publish: "1949",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      subject: "Romance",
      publish: "1813",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      subject: "Fantasy",
      publish: "1937",
    },
    {
      title: "The Book Thief",
      author: "Markus Zusak",
      subject: "Historical Fiction",
      publish: "2005",
    },
    {
      title: "The Fault in Our Stars",
      author: "John Green",
      subject: "Young Adult",
      publish: "2012",
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      subject: "Crime Fiction",
      publish: "2005",
    },
    {
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      subject: "Fantasy",
      publish: "1950-1956",
    },
    {
      title: "The Shining",
      author: "Stephen King",
      subject: "Horror",
      publish: "1977",
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      subject: "Mystery",
      publish: "2003",
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      subject: "Young Adult",
      publish: "2008",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      subject: "Coming-of-age Fiction",
      publish: "1951",
    },
    {
      title: "Gone Girl",
      author: "Gillian Flynn",
      subject: "Mystery",
      publish: "2012",
    },
    {
      title: "The Color Purple",
      author: "Alice Walker",
      subject: "Epistolary Fiction",
      publish: "1982",
    },
    {
      title: "A Song of Ice and Fire",
      author: "George R.R. Martin",
      subject: "Fantasy",
      publish: "1996-present",
    },

  
];
const searchFormStyle = {
  gap: "10px",
  display: "flex",
  alignItems: "center",
  marginTop: "20px",
  padding: "10px",
  background: "#fff",
  
};

function GridCard() {
  const [books, setBooks] = useState(bookData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchPublish, setSearchPublish] = useState("");
  const [searchSubject, setSearchSubject] = useState("");
  const divStyle = {
    width: "100%",
    maxWidth: 288,
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    justifyContent: "center",
    marginTop: "50px",
  };



  // Number of items to display per page
  const itemsPerPage = 10;

  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range of the books to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Function to handle page navigation
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(books.length / itemsPerPage);

  // Get the books to display on the current page
  const booksToDisplay = books.slice(startIndex, endIndex);

  // Function to handle search
  const handleSearch = () => {
    const filteredBooks = bookData.filter((book) => {
      const titleMatch = book.title.toLowerCase().includes(searchTitle.toLowerCase());
      const authorMatch = book.author.toLowerCase().includes(searchAuthor.toLowerCase());
      const publishMatch = book.publish.toLowerCase().includes(searchPublish.toLowerCase());
      const subjectMatch = book.subject.toLowerCase().includes(searchSubject.toLowerCase());
      return titleMatch && authorMatch && publishMatch && subjectMatch;
    });
    setBooks(filteredBooks);
    setCurrentPage(1);
  };

  // Function to handle reset
  const handleReset = () => {
    setBooks(bookData);
    setSearchTitle("");
    setSearchAuthor("");
    setSearchPublish("");
    setSearchSubject("");
    setCurrentPage(1);
  };

  return (
    <div>
      {/* Search form */}
      <div className="container" style={searchFormStyle}>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by author"
          value={searchAuthor}
          onChange={(e) => setSearchAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by publish year"
          value={searchPublish}
          onChange={(e) => setSearchPublish(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by subject"
          value={searchSubject}
          onChange={(e) => setSearchSubject(e.target.value)}
        />
        <button type="button" className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
      </div>

      {/* Book cards */}
      <div className="container" style={containerStyle}>
        {booksToDisplay.map((book, i) => (
          <div key={i} className="card" style={divStyle}>
            <img
              className="card-img-top"
              src="https://images.pexels.com/photos/15514635/pexels-photo-15514635/free-photo-of-majestic-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Card"
            />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Author: {book.author}</li>
              <li className="list-group-item">Subject: {book.subject}</li>
              <li className="list-group-item">Publish Year: {book.publish}</li>
            </ul>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            type="button"
            className="btn btn-light"
            key={page}
            onClick={() => handlePageChange(page)}
            style={{ margin: "5px" }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}


export default GridCard;
