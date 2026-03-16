//////////////////////////// Helper Function \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const removeActive = () => {
    const menuBtn = document.querySelectorAll(".menu-btn");
    menuBtn.forEach((btn) => {
        btn.classList.remove("bg-[#15803D]", "text-white");
    });
}


//////////////////////////// Category Section \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
        <ul class="menu bg-base-200 rounded-box w-full md:w-56 bg-[#F0FDF4]">
            <li>
                <a id="all-tree" class="hover:bg-green-800 hover:text-white menu-btn">All Trees</a>
            </li>
        </ul>
            
        `;

    document.getElementById("all-tree").addEventListener("click", loadAllTree);

    allCategoryData.forEach(element => {
        const id = element.id;
        const categoryName = element.category_name;


        const childElement = document.createElement("ul");
        childElement.innerHTML =
            `
        <ul class="menu bg-base-200 rounded-box w-full md:w-56 bg-[#F0FDF4]">
            <li>
                <a id="${id}-menu-bar" class="hover:bg-green-800 hover:text-white menu-btn">${categoryName}</a>
            </li>
        </ul>
        
        `;

        parentContainer.appendChild(childElement);
        document.getElementById(`${id}-menu-bar`).addEventListener("click", () => loadCategoryTree(id));

    });
}

loadCategory();

//////////////////////////// All tree Section \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const loadAllTree = async () => {
    const url = "https://openapi.programming-hero.com/api/plants";

    const res = await fetch(url)
    const data = await res.json();
    // console.log(data.plants);
   
    displayAllTree(data.plants);
     highlightAllTree();
}

const displayAllTree = (trees) => {
    // console.log(trees);
    const parentContainer = document.getElementById("tree-card-container");
    parentContainer.innerHTML = "";

    // {
    //     "id": 1,
    //     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
    //     "name": "Mango Tree",
    //     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
    //     "category": "Fruit Tree",
    //     "price": 500
    // }

    trees.forEach(tree => {
        // console.log(tree);
        // Accessing Elements
        const imageURL = tree.image;
        const treeName = tree.name;
        const treeDescription = tree.description;
        const treeCategory = tree.category;
        const treePrice = tree.price;

        const childContainer = document.createElement("div");
        childContainer.innerHTML =
            `
         <div
              id="tree-card"
              class="shadow-sm p-4 bg-white space-y-4 w-full h-full"
            >
              <img class="w-full h-[186px] object-cover rounded-md" src="${imageURL}" alt="" />
              <h2 class="name font-semibold text-[14px]">${treeName}</h2>
              <p class="description font-normal text-[12px] text-[#71717A] w-full">
               ${treeDescription}
              </p>
              <div class="flex justify-between items-center">
                <span
                  class="category bg-[#DCFCE7] text-[#15803D] py-1 px-3 rounded-[400px]"
                  >${treeCategory}</span
                >
                <h2 class="font-semibold text-[14px]">৳${treePrice}</h2>
              </div>
              <button
                class="btn btn-success bg-[#15803D] text-white w-full inter font-medium text-[16px] rounded-[999px]"
              >
                Add to Cart
              </button>
            </div>
        
        `;

        parentContainer.appendChild(childContainer);

    });

}

loadAllTree();


//////////////////////////// Load by Category \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const loadCategoryTree = async (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    // console.log(url); 

    const res = await fetch(url);
    const data = await res.json();

    // Active Buttons Sections 
    removeActive();
    const clickBtn = document.getElementById(`${id}-menu-bar`);
    // // console.log(clickBtn); 
    clickBtn.classList.add("bg-[#15803D]", "text-white");


    displayAllTree(data.plants);
}

// Active button all tree section
const highlightAllTree = () => {
    removeActive();
    const allTreeBtn = document.getElementById("all-tree");
    allTreeBtn.classList.add("bg-[#15803D]", "text-white");
};

