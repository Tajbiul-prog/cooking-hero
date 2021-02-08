const searchMeal = async() => {
    const searchValue = document.getElementById("searchInput").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
        const res = await fetch(url);
        const data = await res.json();
        displayMeals(data.meals);
}
const displayMeals = meals => {
    const mealBox = document.getElementById("menuBoxs");
    mealBox.innerHTML = " ";
    meals.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.className = "card";
            const addDiv = `
            <img class="card-img-top" alt="..." src="${meal.strMealThumb}">
            <h5 class="card-title mt-2">${meal.strMeal}</h5>
            <p class="card-text my-2">${meal.strArea}</p>
            <button onclick="getInstructions('${meal.strMeal}')" class="btn btn-default fw-bold text-decoration-underline text-primary">Get Instructions</button>
            `
            mealDiv.innerHTML = addDiv;
            mealBox.appendChild(mealDiv);
        });
}

const getInstructions = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => instructions(data.meals))
}

const instructions = meals => {
    const details = document.getElementById("popupIngredient");
    details.innerHTML = " ";
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        const addMealDiv = `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <h5>${meal.strArea}</h5>
        <p>1. ${meal.strIngredient1}</p>
        <p>2. ${meal.strIngredient2}</p>
        <p>3. ${meal.strIngredient3}</p>
        <p>4. ${meal.strIngredient4}</p>
        <p>5. ${meal.strIngredient5}</p>
        <p>6. ${meal.strIngredient6}</p>
        `
        details.innerHTML = addMealDiv;
        details.appendChild(mealDiv);
    })
}

