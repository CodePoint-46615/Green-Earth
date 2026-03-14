const loadCategory = () => {
    const url = "https://openapi.programming-hero.com/api/categories";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.categories); 
            displayCategory(data.categories);
        });
}

// {
//     "id": 1,
//     "category_name": "Fruit Tree",
//     "small_description": "Trees that bear edible fruits like mango, guava, and jackfruit."
// }

displayCategory = (allCategoryData) => {
    // console.log(allCategoryData); 
    const parentContainer = document.getElementById("choose-tree-menu");
    parentContainer.innerHTML =
        `
        <li class="menu bg-base-200 rounded-box w-full md:w-56 bg-[#F0FDF4]">
        <a>All Trees</a>
        </li>
        
    `;

    allCategoryData.forEach(element => {
        const id = element.category_name;

        const childElement = document.createElement("ul");
        childElement.innerHTML =
        `
        <ul class="menu bg-base-200 rounded-box w-full md:w-56 bg-[#F0FDF4]">
            <li class=""><a>${id}</a></li>
        </ul>
        
        `;

        parentContainer.appendChild(childElement);
    });
}

loadCategory(); 