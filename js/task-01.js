const allCategoriesOfItems = document.querySelector('#categories');

console.log(`Number of categories: ${allCategoriesOfItems.children.length}`);

[...allCategoriesOfItems.children].forEach(element => {console.log(`Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.children.length}`)
})

