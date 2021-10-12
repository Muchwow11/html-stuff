(function (){
    const article = document.querySelector('body');

    article.addEventListener('click', changeBg);

    function changeBg(e) {
        article.style.backgroundColor = "#aa88dd";
        console.log(e.target)
    }

})();