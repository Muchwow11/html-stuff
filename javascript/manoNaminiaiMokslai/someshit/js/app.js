const getdata = new XMLHttpRequest();

getdata.onreadystatechange = function() {

    if (getdata.readyState === 4){
        const stulpas = getdata.responseText;
        const stularr = JSON.parse(stulpas);
        let ul = document.querySelector("ul");
        for (let stulpai in stularr){
            let li = document.createElement('li');
            ul.appendChild(li)
            li.innerHTML = stularr[stulpai].color

            if (stularr[stulpai].height === true){
                li.classList.add('didelis')
            }else{
                li.classList.add('mazas')

            }
            console.log(stularr[stulpai].height)
        }
    }
}

getdata.open('GET', 'js/data/smth.json');
getdata.send();
