import fs from 'fs';
import update from 'react-addons-update';

console.log("== Sol =========================================");

const order = JSON.parse(fs.readFileSync('./json.data.json', 'utf-8'));

const updateOrder = update(order, {
  receive: {
    $set: "강남구 논현동..."
  },
  payment: {
    method: {
      $set: "mobile"
    }
  },
  products: {
    0: {
      amount: {
        $set: 200
      }
    },
    $push: [
      {
        no: 'c002-003',
        name: '블루양말',
        price: 2000,
        amount: 1
      }
    ]
  }
});

console.log(updateOrder, order);



