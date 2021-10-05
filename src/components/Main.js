import React from "react";
import style from "./Main.module.css"

const Main = (props) => {
    let taskElements =
        props.todo_reducer.task.map((e) =>

            <div key={e.id} id={e.id} className={style.items}>
                <span>{e.taskText}</span>
                <div>
                    <button onClick={() => addStyle()}
                            className={props.isStyle === true
                                ? style.styleFromButtonDone : null}
                    >выполнено</button>
                    <button onClick={() => onRemove()}>удалить</button>
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
        props.handleRemoveAC(id);
    }

    let addStyle = (isStyle) => {
        props.toggleIsStyle(true)
    }

    return (
        <div className={style.main}>
            <h1>БЛОКНОТ</h1>
            <div className={style.wrapperTextEnter}>
                <textarea placeholder="..."
                          onChange={onTaskChange}
                          value={props.newTaskText}/>
                <button onClick={addTask}>+</button>
            </div>
            <h2>tasks for the day:</h2>
            {taskElements}
        </div>
    )
}

export default Main;