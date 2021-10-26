const form = document.querySelector('form');
const city = document.querySelector('.city');
const adress = document.querySelector('.street');
const postCode = document.querySelector('.pCod');
const submit = document.querySelector('.submit');

submit.addEventListener('click', getCode)

async function getCode(){
    let url = `https://api.postit.lt/v2/?city=${city.value}&address=${adress.value}&key=iwHFAL4nnXPk7dht9xcO`
    fetch(url)
        .then(response => response.json())
        .then(result => {
                result.data
            }
        )
        // for(let info in  ){
        //
        // }
        //
}