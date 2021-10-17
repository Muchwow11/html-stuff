(function (){
    const body = document.querySelector('body');

    for (let i = 1; i <= 16; i++){
        const div = document.createElement('div');
        body.appendChild(div);
}
    body.addEventListener('click', changeBg)

function changeBg(e){
    let color = '#'+(Math.random()*0xFFFFF<<0);
    e.target.style.backgroundColor = color;
    console.log(e.target)
}

    // for (let i = 1; i<= 16; i++){
    //     let MyDiv = document.createElement('div');
    //     document.body.appendChild(MyDiv);
    // }
    //
    // function random(number){
    //     return Math.floor(Math.random()*number)
    // }
    //
    // function bgChange(){
    //     let rndCol = 'rgb('+ random(255) + ',' + random(255) + ',' + random(255) + ')';
    //     return rndCol;
    // }
    //
    // let divs = document.querySelectorAll('div');
    //
    // for (let i = 0; i < divs.length; i++){
    //     divs[i].onclick = function (){
    //
    //     }
    // }

})();