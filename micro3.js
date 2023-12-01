const foodData=require('./food.json');

//List all food items:-
function allFoodItems(){
    return foodData;
}
console.log('1.List all food Items',allFoodItems());

//list all food items with category vegetables:-
function categoryVegetables(){
    return foodData.filter((food)=>food.category==='Vegetables');
}
console.log('2.list all food items with category vegetables:',allFoodItems());

//list all food items with category fruit:-
function categoryFruits(){
    return foodData.filter((food)=>food.category==='Fruit');
}
console.log('3.list all food items with category fruit:',categoryFruits());

//list all food items with category Protein:-
function categoryProteins(){
    return foodData.filter((food)=>food.category==='Protein');
}
console.log('4.list all food items with category Protein:',categoryProteins());

//list all food items with category nuts:-
function categoryNuts(){
    return foodData.filter((food)=>food.category==='Nuts');
}
console.log('5.list all food items with category nuts:',categoryNuts());

//list all food items with category Grains:-
function categoryGrains(){
    return foodData.filter((food)=>food.category==='Grain');
}
console.log('6.list all food items with category Grains:',categoryGrains());

//list all food items with category Dairy:-
function categoryDairy(){
    return foodData.filter((food)=>food.category==='Dairy');
}
console.log('7.list all food items with category Dairy:',categoryDairy());

//list all the food items with calorie above 100:-
function calorieAbove100Item(){
    return foodData.filter((food)=>food.calorie>100);
}
console.log('8.list all food items with calorie above 100:',calorieAbove100Item());

//list all the food items with calorie below 100:-
function calorieBelow100Item(){
    return foodData.filter((food)=>food.calorie<100);
}
console.log('9.list all food items with calorie below 100:',calorieBelow100Item());

//list all the food items with highest protein content to lowest:-
function highestProteinContentToLowest(){
    return foodData.sort((a,b)=>b.protiens-a.protiens);
}
console.log('10.list all the food items with highest protein content to lowest:',highestProteinContentToLowest());

//list all the food items with lowest cab content to highest:-
function lowestCabContentToHighest(){
    return foodData.sort((a,b)=>a.cab-b.cab);
}
console.log('11.list all the food items with lowest cab content to highest:',lowestCabContentToHighest());
