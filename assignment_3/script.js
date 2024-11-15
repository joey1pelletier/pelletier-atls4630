/*fetch('https://foodish-api.com/api')
    .then(response => response.json())
     // if returns promise...do line below
    .then(data => console.log(data.image));
*/

const addFoodPicButton = document.getElementById('add-food-pic-button');
console.log(addFoodPicButton);
addFoodPicButton.addEventListener('click', addFoodPic);

async function addFoodPic() {
    const url = "https://foodish-api.com/api";
    const response = await fetch(url); // waiting for promise to resolve
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();

    console.log(json);
    let food_link = json.image;
    console.log(food_link);

       
    let food_img = document.createElement('img');
    console.log(food_img);
    food_img.setAttribute('src', food_link);
    food_img.setAttribute('alt', 'a random pic of food');
    food_img.style.width = '300px';
    food_img.style.height = 'auto';
    document.body.appendChild(food_img);
    console.log(food_img);
    console.log(document.body);
    
}



    // console.log(json.image);
     

    
    
