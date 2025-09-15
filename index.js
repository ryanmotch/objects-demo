const userInputString = prompt(
  "Please enter some flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

const flavorsArray = userInputString.split(",");

console .log(flavorsArray);

const flavorObj = {

}

for (let i = 0; i < flavorsArray.length; i++){
if (flavorsArray[i] in flavorObj){
    flavorObj[flavorsArray[i]] += 1
}
else {
    flavorObj[flavorsArray[i]] = 1
}}
console.log(flavorObj);