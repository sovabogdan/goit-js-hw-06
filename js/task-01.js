const categories = document.querySelectorAll('.item')
console.log('Number of categories:', categories.length);
categories.forEach(function (itemName) {
    const categoriesRef = itemName.firstElementChild;
    const elementsLengthRef = itemName.lastElementChild;
    console.log('Category :', categoriesRef.textContent)
    console.log('Elelments :', elementsLengthRef.children.length)
})

