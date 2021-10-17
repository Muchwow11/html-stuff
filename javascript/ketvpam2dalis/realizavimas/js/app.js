let produktai = (JSON.parse(localStorage.getItem('products')));

let code = document.getElementsByTagName('code')

for (let i = 0; i < produktai.length; i++){
    code.innerHTML = JSON.stringify(localStorage);

    console.log(produktai)


}




