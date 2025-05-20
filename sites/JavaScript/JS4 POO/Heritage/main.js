import User from './User.js';
import Admin from './Admin.js';

let test = new User("Rocher","Pierre");
let admin = new Admin()
let admin1 = new Admin("Orange","Steeve", "expert wc")
console.log(test.fullName())
console.log(`j'ai comrpis le cours ? ${admin.canEditArticles()}eeeeee... not true`)
console.log(admin1.fullName())
console.log(test.job);             

test.job = "Designer";             
console.log(test.job);

console.log(test.age);

test.age="27";

console.log(test.age);

