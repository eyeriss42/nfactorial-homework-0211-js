'use strict';

// ex 1 restaurant

//create an object with different data types
let restaurant = { 
    name: 'Chak Chak Heaven', /* string */
    openSinceYear: 2010, /* number */
    isSugarFree: false, /* boolean */
    tips: null, /* null */
    menu: undefined, /* undefined*/
    rating: 4
}

//add object property
restaurant['Address']='Abay Ave';
// delete object property
delete restaurant.rating;

//display object
console.log(restaurant);

// ex 2 car

//create object
let vehicle = {
    brandName: 'MINI',
    model: 'Clubman',
}
//change value of model
vehicle.model = 'Countryman'

// delete model from the object
delete vehicle.model;

//display object
console.log(vehicle);

// ex 3 salaries

//create object
const salaries = {
	Cheburashka: 100,
	CrocodileGena: 160,
	Snoopy: 130,
    Stitch: 200,
    HomerSimpson: 0
}

//calculate total sum of salaries in the object
let totalSalaries=0;
for (let key in salaries){
    totalSalaries+=salaries[key];
}

//display the sentence with the totalSalaries
console.log('the total value of salaries is ' + totalSalaries);