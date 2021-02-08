
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=c`)
    .then(res => res.json())
    .then(data => getResultList(data.meals))

    function getResultList(meals){
        console.log(meals)
        const mealNames = 
        console.log(mealNames);
    }









    getResultList

    // const mealName = data.meals;
    // for(let i = 0; i < mealName.length; i++){
    // const element = mealName[i];
    // console.log(element.strMeals)
