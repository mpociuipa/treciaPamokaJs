//pirma uzduotis
// Javascript program to search largest word from a string
 
function longest(str) {
 
    // Split the string using regex
    str = str.match(/[a-zA-Z0-9]+/gi);
    // Creating a empty string to store largest word
    let largest = "";
 
    // Creating a for...loop to iterate over the array
    for (let i = 0; i < str.length; i++) {
     
        // If the i'th item is greater than largest string
        // then overwrite the largest string with the i'th value
        if (str[i].length > largest.length) {
            largest = str[i];
        }
    }
    return largest;
}
 
console.log(
    longest(
        "Hello guys this is geeksforgeeks where" +
            " students learn programming asasasasasasassasasasasas"
    )
);


//antra uzduotis
const array = [11, 22, 33, 44, 55, 66, 77,999];
const max = Math.max(...array);
console.log(max);

//trecia uzduotis
// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);

//ketvirta uzduotis
function convertToTitleCase(str) {
    if (!str) {
        return ""
    }
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  
  console.log(convertToTitleCase('welcome to my article'));
  console.log(convertToTitleCase('THE avengers'));
  