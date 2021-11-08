import React, {useState} from "react";

const Task = (props) => {
    const [status,setStatus] = useState(props.status)
    const [clas,setClass] = useState(props.title)
    const clickHandler = ()=>{
            setClass("brauk")
            setStatus("done")
    }

    return(

        <li className="list-group-item">
            <div className="todo-indicator bg-warning"></div>
            <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                    <div className="widget-content-left mr-2">
                        <div className="custom-checkbox custom-control"><input
                            className="custom-control-input"
                            id="exampleCustomCheckbox12" type="checkbox" /><label
                            className="custom-control-label"
                            htmlFor="exampleCustomCheckbox12">&nbsp;</label></div>
                    </div>
                    <div className="widget-content-left">
                        <div className={`widget-heading ${clas}`}>{props.title}<div
                            className={`badge badge-danger ml-2`}>{status}</div>
                        </div>
                        <div className="widget-subheading"><i>Created by: {props.created}</i></div>
                    </div>
                    <div className="widget-content-right">
                        <button
                            className="border-0 btn-transition btn btn-outline-success" onClick={clickHandler}>
                            <i className="fa fa-check"></i></button>
                        <button
                            className="border-0 btn-transition btn btn-outline-danger">
                            <i className="fa fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export  default Task;