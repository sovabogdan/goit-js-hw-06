const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const ingredientsItems = ingredients.map(ingredient => {
 const itemList= document.createElement('li');
  itemList.textContent = ingredient;
  
  itemList.classList.add('item');
 
   return itemList;
 });

 const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredientsItems);
