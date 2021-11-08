import React, {useState} from "react";

const Form = (props) => {

    function ClearFields() {
        document.getElementById("pav").value = "";
        document.getElementById("cre").value = "";
    }

    const [userInput, setUserInput] = useState({
        'title':'',
        'status':'',
        'created':''
    })
    const titleHandler = (event)=>{
        setUserInput((prevState) =>{
            return {...prevState, title:event.target.value}
        } )
    }

    const statusHandler = (event)=>{
        setUserInput((prevState) =>{
            return {...prevState, status:event.target.value}
        } )
    }

    const creatorHandler = (event)=>{
        setUserInput((prevState) =>{
            return {...prevState, created:event.target.value}
        } )
    }

    const submitHandler = (event) =>{
        event.preventDefault(); //BUTINAI TURI BUTI SITA KOMANDA!!!!!!!!!! TIK KAI YRA SUBMIT MYGTUKAS
        const userInputId={
            id:Math.random().toString(),
            ...userInput
        }
        props.onCreateTask(userInputId)
        ClearFields();

    }

    return (
        <form id="formast" onSubmit={submitHandler}>
          <div className="form-group"> <input id="pav" className="form-control" type="text" placeholder="Pavadinimas" required onChange={titleHandler}/></div>
            <h6>Busena</h6>
          <div className="form-group">  <input id="bus" className="form-control" list="buse" id="buseCho" placeholder="Busena" onChange={statusHandler} required/>
            <datalist id="buse">
                <option>Open</option>
                <option>Done</option>
            </datalist>
          </div>
            <fieldset>
            <div className="form-group"><input id="cre" className="form-control" type="text" placeholder="Autorius" required  onChange={creatorHandler}/> </div>
            </fieldset>
         <button type="submit" className="btn btn-primary">Saugoti</button>
        </form>
    )
}

export default Form;