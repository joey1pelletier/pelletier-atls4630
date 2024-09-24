// MOVE SLOW WITH APIs!!!!!! Keep console logging!

// the PROPER way to handle promises
fetch('https://meowfacts.herokuapp.com/')
    .then(response => response.json())
     // if returns promise...do line below
    .then(json => console.log(json.data[0]));


const addMeowFactsButton = document.getElementById('add-meow-facts-button');
addMeowFactsButton.addEventListener('click', addMeowFactsToPage);

// function to fill page with meowfacts
async function addMeowFactsToPage() {
    const count = 3;
    const url = `https://meowfacts.herokuapp.com/?count=${count}`;
    const response = await fetch(url); // waiting for promise to resolve
    const json = await response.json();
    console.log(json); // to check if data is showing up on console

    for(const meowfact of json.data) {
        console.log(meowfact);
        // document.body.innerHTML += `<p>${meowfact}</p>`; // DANGEROUS!!!!!!!
        const paragraph = document.createElement('p');
        paragraph.innerText = meowfact;
        document.body.append(paragraph);
    }
}   

// go to public APIs website for assignment 3
    // set https to yes
    // set cors to yes
    // set auth to no auth

// API key: check documentation of API for instructions