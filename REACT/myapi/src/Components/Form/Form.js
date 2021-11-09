import React, {useState} from "react";

function  Form(){
    const [movie,setMovie] = useState()
    const [userInput,setUserInput] = useState()

    const titleHandler = (e) =>{
        setUserInput(e.target.value)
    };

    const getData = (e) =>{
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?t=${userInput}&plot=full&apikey=7115894f`)
            .then(response => response.json())
            .then(data => setMovie(data)


            )};

        console.log([movie])
    return  (<div>
        <form>
          <div className="form-group"><input className="form-control inp" type="text" placeholder="Type in Movie" onChange={titleHandler}/></div>
            <button className={"btn btn-primary"} onClick={getData} >Search</button>
        </form>

    </div>)
}

export default Form