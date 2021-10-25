const getData = new XMLHttpRequest(); // SUKUREM OBJEKTA


getData.onreadystatechange = function() {

    if (getData.readyState === 4) {
        const students = getData.responseText;
        const studName = JSON.parse(students);
        const ul = document.querySelector('ul');
        for (const student in studName) {
            const li = document.createElement('li');
            ul.appendChild(li)
            li.innerHTML = studName[student].name;
            if (studName[student].location === false){
                li.classList.add('nera');
            }else{
                li.classList.add('yra');
            }
        }
    }
}

getData.open('GET', 'js/Data/students.json');
getData.send();

// const btnNav = document.querySelector('button')
// getData.onreadystatechange = function (){
//     if (getData.readyState === 4){
//         if(getData.status === 200){
//             document.querySelector('aside').innerHTML = getData.responseText;
//         }else{
//             console.log(getData.statusText);
//         }
//     }
// }
//
// getData.open('GET', 'js/Data/nav.html');
// document.querySelector('button').onclick = function (){
//     getData.send();
//     document.querySelector('button').style.display = 'none';
// }
// ----------------------------------------another way
// getData.onreadystatechange = function (){
//     if (getData.readyState === 4) {
//         const students = getData.responseText
//         const studentlist = JSON.parse(students)
//
//         for (let student of studentlist) {
//             console.log(JSON.stringify(student))
//             console.log(student);
//             document.querySelector('li').innerHTML = student
//             }
//         }
// }

// if (studName[student].location === false) {
//     for (let x = 0; x < marker.length; x++) {
//         marker[x].style.color = '#ff2222'
//     }
// } else {
//     for (let x = 0; x < marker.length; x++) {
//         marker[x].style.color = '#00ff00'
//     }

// var goodBrowser = getElementsByClassName("good-Browser");
// for(i = 0; i < goodBrowser.length; i++) {
//     badBrowser.style.display = "block";
//     goodBrowser.style.display = "none";