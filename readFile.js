//const-defines constants, fs-variable name(FILE SYSTEM)
//require('fs')- allows you to work with files
const fs = require('fs');

// fs.readFile-method that reads the content of file asynchronously
//technology_paragraph.txt-first argument-path to file
//utf8-second argument-character encoding
//(err, data) => {-callback function, operated when cread operationis complete
fs.readFile('technology_paragraph.txt', 'utf8', (err, data) => {
    // Handle any errors that may occur
    if (err) {
        // console.error-error reading file
        console.error("Sorry, there is error reading the file;):", err);
        //return-exits the callback early(if there is error)
        return;
    }
    
    // Output the content of the file to the terminal
    //print the label-technology
    console.log("TECHNOLOGY");
    //prints the content
    console.log(data);
});

