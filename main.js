const apilink = "https://api.spoonacular.com/recipes/findByIngredients?";
const apikey = "&apiKey=";
var ingredients = "ingredients="
var results = "&number=3"
const license = "&limitLicense=true"

fridge = []




function request() {
    
    for (var i = 0; i < (fridge.length - 1); i++) {
        ingredients = ingredients + fridge[i] + ",+";
    }
    ingredients = ingredients + fridge[fridge.length -1];
    
    const apirequest = apilink + ingredients + license + results + apikey;
    fetch(apirequest)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const title1 = data[0].title;
        const image1 = data[0].image;
        
        const title2 = data[1].title;
        const image2 = data[1].image;
        
        const title3 = data[2].title;
        const image3 = data[2].image;
        
        document.getElementById('image1').src = image1;
        document.getElementsByTagName('h3')[0].innerHTML = title1;

        document.getElementById('image2').src = image2;
        document.getElementsByTagName('h3')[1].innerHTML = title2;

        document.getElementById('image3').src = image3;
        document.getElementsByTagName('h3')[2].innerHTML = title3;
       
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