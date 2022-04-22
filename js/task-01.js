
const categories = document.querySelector('#categories').children;
console.log(`Number of categories: ${categories.length}`);

const categoryItems = document.querySelectorAll('.item')
    .forEach((category) => {
        console.log('Category: ' + category.querySelector('h2').textContent),
            console.log('Elements: ' + category.querySelectorAll('li').length)
    });

