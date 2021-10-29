import Article from "../article/article";
import Aside from "../aside/aside";
import allArticles from "../../Data/articles";
function Main(){
    const articlesComponents = allArticles.map(
        article=> <Article title={article.title} text={article.text} img={article.img}/>)
    return(
        <main>
            {articlesComponents}
        </main>
    );
}

export default Main;



{/*<Article*/}
{/*    data = {{title: "Naujiena2", text:"naujiena gera", img:"https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_2x3.jpg"}}*/}
{/*/>*/}
{/*<Article*/}
{/*    data = {{title: "Naujiena3", text:"naujiena gera", img:"https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/cat-behaviour.jpg"}}*/}

{/*/>*/}
{/*<Article*/}
{/*    data = {{title: "Naujiena4", text:"naujiena gera", img:"https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg"}}*/}
