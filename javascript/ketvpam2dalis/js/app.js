// let stores = ['Kebabas', 'mesa', 'koldunai']; // masyvas
//
// //viskas kas saugoma local storage turi buti convertuoti i stringa
// let store = {
//     title: "kebabas",
//     desc: "skaniausias maistas"
// }
//
// localStorage.setItem('items', JSON.stringify(store)); // issaugau masyva storage. JSON stringinu
//
// console.log(JSON.parse(localStorage.getItem('items'))); //displayinu masyva is storage. json parsinu kad gautusi masyvas

const form = document.querySelector('form')
const code = document.querySelector('.code')
const title = document.querySelector('.title')
const count = document.querySelector('.count')
const btnAdd = document.querySelector('.add')
const btnOrder = document.querySelector('.order')

btnAdd.addEventListener('click', addItem);
btnOrder.addEventListener('click', orderAll);
let products = [];
function addItem(){
    let product = {
        code:code.value,
        title:title.value,
        count:count.value
    }
    products.push(product)
}

function orderAll(){
    localStorage.setItem('products', JSON.stringify(products));
}

console.log(JSON.parse(localStorage.getItem('products')))
form.onsubmit = function(e){
    e.preventDefault();
}
