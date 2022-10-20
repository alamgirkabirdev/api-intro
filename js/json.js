// Javascript Object Natation
// JSON
const user ={id: 11, name: 'Gorib ami', job:'actor'};
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name:'alia store',
    address:'Ranbir road', 
    profit: 1500,
    products:['laptop', 'mobile','balti'],
    owner:{
        name: 'alam akondu',
        profession:'student',
    },
    isExpensive: false,
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);