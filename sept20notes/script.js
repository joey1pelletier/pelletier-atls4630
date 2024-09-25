console.log("hello world");

// 'export' allows us to export code that need to be used in other files

// 'import' imports pieces of code that have been exported from other files
import * as Utils from "./utils.js";
import { printHelloWorld as hello, PAGE_SIZE } from "./utils.js"; // function to be imported from utils.js



Counter();

Utils.hello(); // dunno why this doesnt work

hello();

printHelloWorld();
for (let i = 0; i < PAGE_SIZE; i++) {
    console.log(i);
}