/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // create an empty object to save the category and food
  let cmap = {};

  // now loop over the array or provide a function to take out category and price from the object of the array
  //the main goal is to take out the category and price from the transactions element and then push the
  transactions.forEach((element) => {
    //now i want to push the value(category and price) of the transaction to the cmap
    //lets extract category and price from
    let category = element.category;
    let price = element.price;

    //now push the category and price to the cmap
    if (cmap[category]) {
      cmap[category] = cmap[category] + price;
    } else {
      cmap[category] = price;
    }
  });
  //now lets change it to array
  //extract the keys from cmap
  let keys = Object.keys(cmap); //returns an array

  //now to the acquired array
  let result = keys.map((x) => ({
    category: x,
    totalSpent: cmap[x],
  }));

  return result
}
module.exports = calculateTotalSpentByCategory;
