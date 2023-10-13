const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = '0';

// Corrected location assignment with '==='
let location = 'RSA';
let shipping = 400 ;
let currency = 'R';

 if (location === 'RSA') {
   shipping = 400;
  currency = 'R';
 } 



if (location === 'NAM') {
  shipping = 600;
  currency = '$';
} else if (location === 'all other countries') {
  shipping = 800;
  currency = '$';
}

shoes = 300 * 1;
 toys = 100 * 5;
 shirts = 150 * parseInt(NONE_SELECTED);
 batteries = 35 * 2;
 pens = 5 * parseInt(NONE_SELECTED); 


shipping = null;
currency = '$';

if (shoes + batteries + pens + shirts > 1000) {
  if (location === 'NAM' && customers < 2) {
    if (location === 'RSA') {
      // Shipping can be 0 or calculated shipping cost; replace 'calcShipping' with the appropriate logic
      shipping = 0; // or shipping = calcShipping;
    }
  }
}

// Corrected '!===' to '!=='
if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}


if (location === 'NK'){
  console.log(BANNED_WARNING)
} 
const customers = 1; // Moved the customers assignment before its use

let balance = 0
if (location === NAM && customers < 2 || location === RSA){
  balance = shoes + batteries + pens + shirts;
}
console.log(balance);



