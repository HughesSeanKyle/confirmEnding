// Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Solution 1 (Declarative approach)

function confirmEnding(str, target) {                                   //1

  return str.slice(str.length - target.length) === target;              //2
}

console.log(confirmEnding("He has to give me a new name", "name"));

// Notes
/*/

    //1 Initializes function that takes in two strings as an argument
        The first string will be the sample data to be analysed 
        the second string will be the target to identify from the sample data
    //2
        The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
        Source - [https://devdocs.io/javascript/global_objects/string/slice]

        In this case the arguments within the string actually looks like this:
        slice(28 - 4 = 24)
        str.slice(str.length - target.length) - This portion of the code will = "name"
        A slice method with one digit as an argument will remove that value of characters or indices from the string. 
        In this case the slice method will remove 24 characters (including spaces) or 23 indices and returns "name" as the remainder of the orginal string. (As the documentation states the original string will not be modified)
        This returned remainder is then compared with the tartget argument and if it matches it will reflect "true"



// "Never give up and good luck will find you."
// -- Falcor
    
                                */