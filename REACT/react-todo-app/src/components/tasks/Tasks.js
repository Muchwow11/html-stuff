import React, {useState} from "react";
import Header from "../header/Header";
import Task from '../task/Task';
import data from '../../data/data';
import NewTask from "../newTask/newTask";
import Form from "../form/form";

const Tasks = () => {
    const [tasksList, setTasks] = useState(data)
    const addTaskHandler =(task)=>{
        setTasks(prevState => {
            return [task,...prevState]
        })
    }
    const tasks = tasksList.map((task) =>
        (<Task  title={task.title} created={task.created} status={task.status} date={task.date} />
        )
    );
    console.log(tasksList)
    return (
        <div className="col-md-8">
            <div className="card-hover-shadow-2x mb-3 card">
                <NewTask />

                <Form onCreateTask = {addTaskHandler} />
                {/*-----------------------------------------*/}
                <Header />
                {/*-----------------------------------------*/}

                {/*-----------------------------------------*/}
                <perfect-scrollbar className="ps-show-limits">
                    <div style={{position: "static"}} className="ps ps--active-y">
                        <div className="ps-content">
                    <ul className=" list-group list-group-flush">
                        {/*TASK*/}
                        {tasks}
                    </ul>
                        </div>
                    </div>
                </perfect-scrollbar>
                {/*-----------------------------------------*/}
            <div className="d-block text-right card-footer">
                <button className="mr-2 btn btn-link btn-sm">Cancel</button>
                <button className="btn btn-primary">Add Task</button>
            </div>
                {/*-----------------------------------------*/}
            </div>
        </div>
    )
}

export default Tasks;
