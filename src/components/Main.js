import React from "react";
import style from "./Main.module.css"
import {handleDoneAC} from "../redux/todo-reduser";

const Main = (props) => {
    let taskElements =
        props.todo_reducer.task.map((e) =>
            <div id={e.Id} className={style.items}>
                <span>{e.taskText}</span>
                <div>
                    <button onClick={() => handleDoneAC} >выполнено</button>
                    <button onClick={() => onRemove}>удалить</button>
                </div>
            </div>);
    let addTask = () => {
        props.addTaskAC();
    }
    let onTaskChange = (e) => {
        let body = e.target.value;
        props.updateTaskAC(body);
    }
    let onRemove = (id) => {
        props.handleRemoveAC(id)
    }

    return (
        <div className={style.main}>
            <h1>toDOList</h1>
            <div className={style.wrapperTextEnter}>
                <textarea placeholder="..."
                          onChange={onTaskChange}
                          value={props.newTaskText}/>
                <button onClick={addTask}>add task...</button>
            </div>
            <h2>tasks for the day:</h2>
            {taskElements}
        </div>
    )
}

export default Main;