function printHelloWorld() { // function to be exported
    console.log("hello world");
}

export { printHelloWorld };

// can also do
/*
export function printHelloWorld() { 
    console.log("hello world");
}
*/

export const PAGE_SIZE = 25; // capitalize and underscore for consts