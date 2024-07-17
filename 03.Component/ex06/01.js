import fs from 'fs';

console.log("== Violation ===================================");
let order =   JSON.parse(fs.readFileSync('./json/data.json', 'utf-8')); 

const updateOrderProducts1 = order.products; 
updateOrderProducts.push( {
    no : 'c002-003',
    name: '블루양말', 
    price: 2000, 
    amount: 1 
}); 

console.log(order.products, updateOrderProducts1, order.products === updateOrderProducts1); 


console.log("== Sol1 ========================================");
order =  JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))


const updateOrderProducts2 = order.products.concat({
    no : 'c002-003',
    name: '블루양말', 
    price: 2000, 
    amount: 1 
}); 

console.log(order.products, updateOrderProducts2, order.products === updateOrderProducts2); 


console.log("== Sol2 ========================================");

    order =  JSON.parse(fs.readFileSync('./json/data.json', 'utf-8')); 

const updateOrderProducts3 = [...order.products, {
    no : 'c002-003', 
    name : '블루양말', 
    price: 2000, 
    amount : 1
}]; 

console.log(order.products, updateOrderProducts2, order.products === updateOrderProducts3); 

// 배열의 요소를 바꿀때에는 spread 를 쓰던지 map 을 쓰던지 filter 를 사용해라 !! 

cards = data.filter(e=> e.status === 'Doing'); // doing 인 애들만 return해준다 
console.log(cards); 

data = [{no:10, status:'Done'}, {no:10, status:'Doing'}, {no:11, status:'Doing'}, {no:10, status:'Todo'}]


