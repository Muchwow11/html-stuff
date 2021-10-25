const getdata = new XMLHttpRequest();

getdata.onreadystatechange = function() {

    if (getdata.readyState === 4){
        const stulpas = getdata.responseText;
        const stularr = JSON.parse(stulpas);
        let aside = document.querySelector("aside");
        let ul = document.createElement('ul')
        aside.appendChild(ul)
        for (let x in stularr){
            let li = document.createElement('li');
            ul.appendChild(li)
            li.innerHTML = stularr[x].color
            if (stularr[x].height === true){
                li.classList.add('didelis')
            }else{
                li.classList.add('mazas')
            }
            console.log(stularr[x].height)
        }
    }
}

getdata.open('GET', 'file.json');
getdata.send();
