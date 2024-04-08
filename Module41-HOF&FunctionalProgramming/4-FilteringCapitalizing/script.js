// List of books with titles, authors, and publication years
const books = [
    { title: "Book 1", author: "john smith", year: 2005 },
    { title: "Book 2", author: "emma watson", year: 2012 },
    { title: "Book 3", author: "george orwell", year: 1984 },
    { title: "Book 4", author: "j.k. rowling", year: 2003 },
    { title: "Book 5", author: "stephen king", year: 2015 }
  ];
  
  // Function to filter out books published before 2010 and capitalize author names
  function filterAndCapitalizeAuthors(books) {
    return books
      .filter(book => book.year >= 2010) // Filter books published after 2010
      .map(book => ({
        title: book.title,
        author: book.author.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), // Capitalize author names
        year: book.year
      }));
  }
  
  // Filter and capitalize authors
  const filteredBooks = filterAndCapitalizeAuthors(books);
  
  // Output the new array containing filtered and capitalized book data
  console.log("Filtered and Capitalized Books:", filteredBooks);
  