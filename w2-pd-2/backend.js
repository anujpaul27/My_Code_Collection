
    document.getElementById("button").addEventListener("click", function () {
    var val = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = "";
    
    // Read All Product 
    function AllProduct() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.meals) {
                displayProduct(data.meals);
            } else {
                document.getElementById("sectionn").innerHTML = "<h2 style='color: red'>Item Not Found</h2>";
            } 
        })
    }

    const displayProduct = (list) => {
    const container = document.getElementById("sectionn");
    container.innerHTML = "";

    list.forEach(meal => {
        const div = document.createElement("div");
        div.classList.add("product-div");
        div.innerHTML = `
            <img class="image" src="${meal.strMealThumb}" />
            <h2 style="color: white">${meal.strMeal}</h2>   
            <button class="details-btn">Details</button>          
        `;
        container.appendChild(div);

        // Attach event listener dynamically
        div.querySelector(".details-btn").addEventListener("click", () => fetchMealDetails(meal.idMeal));
        });
    };

    const fetchMealDetails = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const meal = data.meals[0];
            
            const modal = document.getElementById("mealModal");
            const modalImage = document.getElementById("modalImg");
            const modalTitle = document.getElementById("modalTitle");
            const modalInstructions = document.getElementById("modalInstructions");

            modalImage.src = meal.strMealThumb;
            modalTitle.innerText = meal.strMeal;
            modalInstructions.innerText =`Catagory: ${meal.strCategory}`;
            modalInstructions1.innerText =`Location: ${meal.strArea}`;
            modalInstructions2.innerText =`Instructions: ${meal.strInstructions}`.slice(0,200);

            modal.style.display = "block";  
        })
    };


    AllProduct()
    });


