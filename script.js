// what would you do in a day

const recipe = [
  {
    name: "onion soup",
    preparation: "30 min",
    ingredients: ["onion", "broth", "potato"],
  },
  {
    name: "french fries",
    preparation: "35 min",
    ingredients: ["potato", "oil", "salt"],
  },
  {
    name: "spinach roll",
    preparation: "45 min",
    ingredients: ["spinach", "dough", "feta chesse"],
  },
  {
    name: "rice bowl",
    preparation: "20 min",
    ingredients: ["rice", "water", "salt"],
  },
  {
    name: "vegtable soup",
    preparation: "35 min",
    ingredients: ["onion", "carrot", "potato", "red peper", "tomato"],
  },
  {
    name: "shawerma",
    preparation: "45 min",
    ingredients: ["onion", "chicken", "spices"],
  },
  {
    name: "cesar salad",
    preparation: "15 min",
    ingredients: ["lettece", "parmesan chesse", "cesar sauce", "bacon"],
  },
  {
    name: "beef bowl",
    preparation: "30 min",
    ingredients: ["beef", "rice", "avocado", "black been"],
  },
  {
    name: "pizza",
    preparation: "40 min",
    ingredients: [
      "pizza dough",
      "onion",
      "chicken",
      "green pepper",
      "chedar chesse",
    ],
  },
  {
    name: "omlet",
    preparation: "15 min",
    ingredients: ["egg", "tomato", "garlic", "salt", "peper"],
  },
];

// random number function
function randomNumber() {
  return Math.floor(Math.random() * 10);
}

function randomRecipe(num) {
  return `
Name : ${recipe[num].name} 
Preparation Time :  ${recipe[num].preparation} 
Ingredients : ${recipe[num].ingredients.join(", ")}
`;
}

console.log(randomRecipe(randomNumber()));
