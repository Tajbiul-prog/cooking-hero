const searchMeal = () => {
    const searchValue = document.getElementById("searchInput").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = meals => {
    const mealBox = document.getElementById("menuBoxs");

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'card';
        const addDiv = `
        <img class="card-img-top" alt="..." src="${meal.strMealThumb}">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strArea}</p>
        `
        mealDiv.innerHTML = addDiv
        mealBox.appendChild(mealDiv);
    })
}