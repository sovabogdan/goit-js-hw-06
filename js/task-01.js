
/* const categories = document.querySelector('#categories').children;
console.log(`Number of categories: ${categories.length}`);

const categoryItems = document.querySelectorAll('.item')
    categories.forEach((category) => {
        console.log('Category: ' + category.fistElementChild.textContent)
            console.log('Elements: ' + category.lastElementChild.children.length);
        
}); */

const categories = document.querySelectorAll('.item')
console.log('Number of categories:', categories.length);
categories.forEach(function (itemName) {
    const categoriesRef = itemName.firstElementChild;
    const elementsLengthRef = itemName.lastElementChild;
    console.log('Category :', categoriesRef.textContent)
    console.log('Elelments :', elementsLengthRef.children.length)
})

