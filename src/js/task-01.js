const body = document.body;
const list = body.firstElementChild.nextElementSibling;
const categories = list.children;
console.log("Number of categories: " + categories.length);

const firstCategory = categories[0];
console.log('Category: ' + firstCategory.firstElementChild.textContent);
const firstCategoryItems = firstCategory.querySelectorAll("li");
console.log('Elements: '+ firstCategoryItems.length);

const secondCategory = categories[1];
console.log('Category: ' + secondCategory.firstElementChild.textContent);
const secondCategoryItems = secondCategory.querySelectorAll("li");
console.log('Elements: ' + secondCategoryItems.length);

const thirdCategory = categories[2];
console.log('Category: ' + thirdCategory.firstElementChild.textContent);
const thirdCategoryItems = thirdCategory.querySelectorAll("li");
console.log('Elements: '+ thirdCategoryItems.length);