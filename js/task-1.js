const categoriesAll = document.querySelector("#categories");

const categoriesItems = categoriesAll.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryItemsCount = item.querySelectorAll("ul > li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});

console.log('------------------------------------');
