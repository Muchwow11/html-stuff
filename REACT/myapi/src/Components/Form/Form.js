import React, {useState} from "react";

function  Form(){

    const [movie,setMovie] = useState()

    const getData = (e) =>{
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?t=${movie}&apikey=7115894f`)
            .then(response => response.json)
            .then(data => setMovie(data))

    }
    return  (<div>


        <form>
          <div className="form-group"><input className="form-control inp" type="text" placeholder="Type in Movie" /></div>
            <button className={"btn btn-primary"} onClick={getData} >Search</button>
        </form>
    </div>)
}

export default Form