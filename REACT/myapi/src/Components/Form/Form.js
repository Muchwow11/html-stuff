import React, {useState} from "react";

function  Form(){

    const [title,setTitle] = useState()
    const [movie,setMovie] = useState()

    const titleHandler = (e)=>{
        setTitle(e.target.title)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
    }

    const getData = () =>{
        fetch(`http://www.omdbapi.com/?t=${title}&apikey=7115894f`)
            .then(response => response.json)
            .then(data => setMovie(data))

        console.log(movie)
    }
    // const submitHandler =(e)=>{
    //     const GetInfo=()=>{
    //
    //     fetch(`http://www.omdbapi.com/${movie}&apikey=7115894f`)
    //         .then(response => response.json)
    //         .then(data => setMovie(data))
    // }
    //     e.preventDefault()
    //
    //     return GetInfo
    // }
    return  (<div>


        <form>
          <div className="form-group"><input className="form-control inp" type="text" placeholder="Type in Movie" onChange={titleHandler}/></div>
            <button className={"btn btn-primary"} onSubmit={submitHandler} onClick={getData} >Search</button>
        </form>
    </div>)
}

export default Form