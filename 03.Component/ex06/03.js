import fs from 'fs';

console.log("== Violation ===================================");
let order = JSON.parse(fs.readFileSync('./json.data.son', 'utf-8')); 

const updateOrder = Object.assign({}, order,{receive:'강남구 논현동...'}); 
updateOrder.payment.method="mobile"; 

console.log(order, updateOrder); 




