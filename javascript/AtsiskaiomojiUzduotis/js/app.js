
    const form = document.querySelector('form')
    const city = document.querySelector('.city')
    const street = document.querySelector('.street')
    const postCode = document.querySelector('.pCod')
    const submit = document.querySelector('.submit')

    submit.addEventListener('click', searchCode);

    async function searchCode() {
        let url = `https://api.postit.lt/v2/?city=${city.value}&address=${street.value}&key=6NjYtBBrBRJGRx7XTFyL`;
        fetch(url)
            .then(response => response.json())
            .then(result => {
                console.log(result.status)
                if (result.status === 'success') {
                    const getInfo = result.data
                    for (let res in getInfo) {
                        console.log(getInfo[res].post_code)
                        postCode.value = getInfo[res].post_code;
                        postCode.style.color = '#000'
                    }
                }
            });
    }
    form.onsubmit = function (e) {
        e.preventDefault();
    }


// API KEY: 6NjYtBBrBRJGRx7XTFyL
// Pavizdys: https://postit.lt/data/v2/?address=sav&city=vilnius&group=street&key=6NjYtBBrBRJGRx7XTFyL
