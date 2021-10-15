// // const btnNav = document.querySelector('button')

const getData = new XMLHttpRequest(); // SUKUREM OBJEKTA
getData.onreadystatechange = function (){

        if (getData.readyState === 4) {
            const students = getData.responseText
            let studentlits = JSON.parse(students)

            for (let student of studentlits) {
                console.log(JSON.stringify(student))
            }
            for (let i = 0; i <= students.length; i++) {
                document.querySelector('li').innerHTML = getData.responseText
            }
        }


}
getData.open('GET', 'js/Data/students.json');
getData.send();

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