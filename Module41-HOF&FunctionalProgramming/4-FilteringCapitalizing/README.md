- Q. Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.

# Filtering and Capitalizing: Books Published After 2010 with Author Names

## Problem Statement

Write a program that takes a list of books, including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.

## Solution

The solution involves defining a JavaScript program that filters out books published before 2010 and capitalizes the author names of the remaining books. The program should iterate over the list of books, apply the filtering condition, capitalize the author names, and create a new array with the filtered and capitalized data.

## Implementation

The implementation involves the following steps:

1. Define the list of books including their titles, authors, and publication years.
2. Define a function `filterAndCapitalizeAuthors()` to filter out books published before 2010 and capitalize the author names.
3. Use the `filter` higher-order function to create a new array containing only the books published after 2010.
4. Use the `map` higher-order function to capitalize the author names of the remaining books.
5. Output the new array containing the filtered and capitalized book data.

## Example

```javascript
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
```

This code will output:

```
Filtered and Capitalized Books: [
  { title: 'Book 2', author: 'Emma Watson', year: 2012 },
  { title: 'Book 5', author: 'Stephen King', year: 2015 }
]
```

## Instructions

1. Clone this repository to your local machine.
2. Open the `index.js` file.
3. Modify the `books` array to contain the list of books including their titles, authors, and publication years as needed.
4. Run the program using a JavaScript runtime environment like Node.js.
5. The program will filter out books published before 2010 and capitalize the author names of the remaining books, then output the new array containing the filtered and capitalized book data.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[SAGAR SURI]

## Acknowledgments

Special thanks to the problem setters and the community for inspiration and support.

---
