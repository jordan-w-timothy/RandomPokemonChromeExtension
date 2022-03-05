
let randomBtn = document.getElementById("randomBtn");
console.log(randomBtn);

randomBtn.addEventListener("click", async () => {
    console.log("ButtonClicked");

    //Generate a random number between 1 and 151.
    let randNum = Math.floor(Math.random() * 151) + 1
    console.log("Your number is: " + randNum);
    let randomURL = "https://pokeapi.co/api/v2/pokemon/" + randNum;
    console.log("Random URL: " + randomURL)

    //Store temporary info for pokemon.
    let imageURL;
    let pokeName;


    //Send an API request to retrieve a random pokemon from Poke API.(JQuery)
    fetch(randomURL)
        .then(response =>{
            return response.json();
        }).then(data =>{
            console.log(data);
            console.log(data.name);
            pokeName = data.name;
            formattedName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
            console.log(data.sprites.front_default);
            imageURL = data.sprites.front_default;
            document.getElementById("pokeImg").src=imageURL;
            document.getElementById("nameText").innerHTML=formattedName;
        })

        console.log(pokeName);


    //Parse the response and obtain the name, image.

    //Set the image in the popup to the pokemon image, and add a name elemet to the popup.

    // Optional: Update button text.
    //Future Funcitonality: Add option to save the pokemon/update pokedex??
})