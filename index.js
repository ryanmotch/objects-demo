const userInputString = prompt(
  "Please enter some flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

const flavorsArray = userInputString.split(",");

console .log(flavorsArray);

const flavorObj = {

}

for (let i = 0; i < flavorsArray.length; i++){
    console.log(flavorsArray[i]);
flavorObj[flavorsArray[i]] = 1
}
console.log(flavorObj);