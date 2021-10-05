// function sayHi(name){
//     return "Hi " +name;
// }
//
//
//
// console.log(sayHi("Tajus"))

// ===================================================------------------------------

// function addNum(...numbers){
//     let count = 0;
//     for (let number of numbers){
//         count+=number;
//     }
//     return count;
// }
//
//
// console.log(addNum(5,8,6,11,21));

// ----------------------------------------------------=============================

// let addNum = function (...numbers){
//     let count = 0;
//     for (let number of numbers){
//         count+=number;
//     }
//     return count;
// }
//
//
// console.log(addNum(5,8,6,11,21));

//==========================================================------------------------

// let addNum = (...numbers)=>{
//     let count = 0;
//     for (let number of numbers){
//         count+=number;
//     }
//     return count;
// }
//
//
// console.log(addNum(5,8,6,11,21));

// =========================================================----------------------------

// CallBacks

// (function () {
// function deal(question, yes, no){
//     if(confirm(question)) yes()
//     else no()
// }
// function confirmTerms(){
//     alert("Sutinku Su Sutarties Salygomis")
// }
//     function cancelTerms(){
//         alert("atsaukiu!")
//     }
//     deal("ar sutinki su sutarties salygomis", confirmTerms, cancelTerms)
// })();