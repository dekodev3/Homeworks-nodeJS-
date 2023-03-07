/*1.Initialize a new npm project and create an index.js file. 
2.Using the fs module create a new file called homework.txt 
3.Create a path to the file using the path module 
4.Inside the file write the following "Homework 02 in Basic Node" 
5.Append to the file the following " FINISHED!" 
6.Read the file contents and print them out in the console.
 */

const fs = require("fs");
const path = require("path");

fs.writeFileSync("./homework.txt", "Homework 02 in Basic Node");

let pathToSave = path.join(__dirname, "homework.txt");

fs.appendFileSync(pathToSave, "\nFINISHED!");

let content = fs.readFileSync(pathToSave, { encoding: "utf-8" });
console.log(`The content in the homework.txt files is:\n${content}`);
