

const getData = new XMLHttpRequest(); // SUKUREM OBJEKTA


getData.onreadystatechange = function() {

    if (getData.readyState === 4) {
        const students = getData.responseText;
        const studName = JSON.parse(students);
        const ulBad = document.querySelector('.bad');
        const ulGud = document.querySelector('.gud')
        for (const student in studName) {
            const bad = document.createElement('li');
            bad.classList.add('bad')
            const gud = document.createElement('li')
            const style = document.createElement('style')
            const div = document.querySelector('div')
            div.appendChild(style)
            style.innerHTML = 'li::marker {color: #ff2222}'
            if (studName[student].location === true){
                gud.innerHTML = studName[student].name;
                ulGud.appendChild(gud)
                style.innerHTML = '.gud ::marker {color: #00ff00}'
            }else{
                bad.innerHTML = studName[student].name;
                ulBad.appendChild(bad);
                style.innerHTML = '.bad ::marker {color: #ff2222}'
            }


            console.log(studName[student].location)
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