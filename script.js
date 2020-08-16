const age = 30;
const isFemale = true; 
const driverStatus = "jan";
const name = "sarah";
const totalAmount = 26  ;


if (age > 18){
    console.log ("you have access to enter the bar")
} 
else {
    console.log ("you don't have access to enter the bar")
}
if (isFemale == true){
    console.log ("you are female")
}
else {
    console.log ("you aren't female")
}
if (driverStatus == "bob"){
    console.log ("you can drive")
}
else {
    console.log ("you can't drive")
}
if (age >= 18 && age <= 25){
    console.log("Je krijgt 50% korting!")
} else{
    console.log("No discount/korting!")
}
if (name == "sarah" || name == "Bram"){
    console.log("Getting a free drink!")
}else {
    console.log("No free drink!")
}
if ( totalAmount >= 25 && totalAmount <= 50 ){
    console.log("free (vega)bitterballen")
}else if( totalAmount >= 50 && totalAmount <= 75 ){
    console.log("free portion nachos")
}else if(totalAmount >= 100){
    console.log ("free bottle of champagne")
}else{
    console.log ("no free actions")
}