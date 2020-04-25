const apilink = "https://api.spoonacular.com/recipes/findByIngredients?";
const apikey = "&apiKey=";
var ingredients = "ingredients=porc,+cheese,+potato"
var results = "&number=2"
const license = "&limitLicense=true"

fridge = []

var apirequest = apilink + ingredients + license + results + apikey


function request() {
    console.log("Here we go")
    fetch(apirequest)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const title1 = data[0].title;
        
        console.log(data);
    });

}
function select(food) {
    fridge.push(food);
    fridgelist = fridge.toString();
    document.getElementById('chosen').innerHTML = fridgelist;  
}

function createIngredient(){
    var createdIngredient = document.getElementById('ingText').value;
    fridge.push(createdIngredient);
    fridgelist = fridge.toString();
    document.getElementById('ingText').value = "";
    document.getElementById('chosen').innerHTML = fridgelist;
}

function dropdown(element) {
    divid = "dropdown"+element;
    document.getElementById(divid).classList.toggle("show");
}