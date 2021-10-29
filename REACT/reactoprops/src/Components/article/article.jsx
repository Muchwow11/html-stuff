function Article(props){
    return(<article>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <img src={props.img} alt={props.title}/>
    </article>)
}
export default Article