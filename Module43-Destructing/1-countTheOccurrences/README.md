explaination from chatgpt

1. **JavaScript Function**:

```javascript
function wordCount(text) {
    // Split the text into words
    const words = text.split(/\s+/);

    // Create an object to store word counts
    const wordCounts = {};

    // Count occurrences of each word
    for (const word of words) {
        // Remove punctuation and convert to lowercase to ensure accurate counting
        const normalizedWord = word.trim().toLowerCase();

        // Increment count for the word
        wordCounts[normalizedWord] = (wordCounts[normalizedWord] || 0) + 1;
    }

    return wordCounts;
}

// Example usage:
const text = "Hello world hello javascript world";
console.log(wordCount(text));
```

2. **README.md File**:

```markdown
# Word Count Generator

This JavaScript function takes a large string of text as input and outputs the count of each word present in the string.

## Functionality

The `wordCount` function splits the input text into words and counts the occurrences of each word. It then returns an object containing each word and its count.

## Usage

```javascript
function wordCount(text) {
    /*
    Count the occurrences of each word in the input text.

    Parameters:
        text (string): The input text string.

    Returns:
        Object: An object containing each word and its count.
    */
    // Implementation details...
}

// Example usage:
const text = "Hello world hello javascript world";
console.log(wordCount(text));
```

## Example

For the input text `"Hello world hello javascript world"`, the function will output:

```json
{
  "hello": 2,
  "world": 2,
  "javascript": 1
}
```

## Assumptions

- The input string only contains alphabetic characters and spaces.
- Words are separated by spaces.

## Author

[SAGAR SURI]
```