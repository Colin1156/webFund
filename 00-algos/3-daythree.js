// var favFoods =["Calamari", "Pho", "Pizza", "Sushi","Medium-rare steak", "Tacos", "Chipotle"];
// //                0          1       2        3             4              5

// //print each and every value in this array of favFoods

// for(var i=0; i<=6; i++){
//     //if the current food item (favoFood) is Sushi, then print "inflation doe". Otherwise print the foods.
//     if(favFoods[i]== "Sushi"){
//         console.log("inflation doe")
//     }
//     else if(favFoods[i]== "Chipotle"){
//         console.log("great deal " + favFoods[i])
//     }

//     else{
//         console.log(favFoods[i]);
//     }
//}


// var isSunny = false;
// var isRaining = true;
// var temperature = 45; // let's assume this is degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: "
    
// if(isSunny ==true) {
//     //console.log("Wear sunscreen");
//     whatToBring += "sunglasses, ";
// }
// if(temperature < 50) {
//     if(!isRaining) {
//         console.log("This is a good day to go for a walk!");
//     }
// }
    
// if(isRaining) {
//     console.log("Bring an umbrella");
// }

var countPositives = 0;
var number = [3, 4, -2, 7, 16, -8, 0];

//your code!
for(var i = 0; i < number.length; i++){
    if(number[i] > 0) {
        countPositives++;
    }
}

console.log("there are " + countPositives + " positive values")

