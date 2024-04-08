# Extract Name and Street from Nested Object

This JavaScript function extracts the name and street properties from a nested object representing a person. It achieves this using object destructuring.

## Functionality

The `extractNameAndStreet` function takes an object representing a person as input and extracts the `name` and `street` properties from the nested `address` object. It then returns an object with these two properties.

## Usage

```javascript
function extractNameAndStreet(person) {
    /*
    Extract the name and street properties from the input object representing a person.

    Parameters:
        person (Object): An object representing a person with nested address property.

    Returns:
        Object: An object containing properties `name` and `street`.
    */
    // Implementation details...
}

// Example usage:
const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh",
    },
};

const extractedInfo = extractNameAndStreet(person);
console.log(extractedInfo); // Output: { name: "Mithun", street: "B8, Block B, Industrial Area." }
