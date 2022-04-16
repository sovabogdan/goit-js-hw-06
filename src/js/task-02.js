const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 ingredients.map(ingredient => {
 const itemList= document.createElement('li');
  itemList.textContent = ingredient;
  
  itemList.classList.add('item');
  const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(itemList);
   return itemList;
 });


