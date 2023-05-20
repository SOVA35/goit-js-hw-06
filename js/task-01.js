"use strict"
const categoriesList = document.querySelectorAll('ul#categories, .item');

console.log('Number of categories:', categoriesList.length);
categoriesList.forEach((category) => {

    const categoryName = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li');

    console.log('Category:', categoryName);
    console.log('Elements', elements.length);
})

