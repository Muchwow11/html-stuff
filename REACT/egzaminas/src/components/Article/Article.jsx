const Article = (props) =>{
    return(<div>
        <h1 className="movie-title">{props.title}</h1>
        <img src={props.poster} alt=""/>
        <p>{}</p>
    </div>)
}

export default Article