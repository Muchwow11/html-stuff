
    const form = document.querySelector('form')
    const city = document.querySelector('.city')
    const street = document.querySelector('.street')
    const postCode = document.querySelector('.pCod')
    const submit = document.querySelector('.submit')

    submit.addEventListener('click', searchCode);

    async function searchCode() {
        let url = `https://api.postit.lt/v2/?city=${city.value}&address=${street.value}&key=6NjYtBBrBRJGRx7XTFyL`;
        fetch(url)  //issiunciu uzklausą;
            .then(response => response.json()) // duomenis gaunu;
            .then(result => {
                console.log(result.status)
                if (result.status === 'success') {
                    const getInfo = result.data // atfiltruoja data su reikiama info;
                    for (let i = 0; i < getInfo.length; i++) {
                        console.log(getInfo[i].post_code) // is atrinktos datos pasiimamas postCode'as;
                        postCode.value = getInfo[i].post_code;
                        postCode.style.color = '#000'
                    }
                } else {
                    postCode.value = 'Klaida! Patikslinkite įvestą miestą ir gatvę!';
                }
            });
    }
    form.onsubmit = function (e) {
        e.preventDefault();
    }


// API KEY: 6NjYtBBrBRJGRx7XTFyL
// Pavizdys: https://postit.lt/data/v2/?address=sav&city=vilnius&group=street&key=6NjYtBBrBRJGRx7XTFyL
