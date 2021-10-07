import React from "react";
import style from "./Main.module.css"
import success from "./../image/free-png.ru-3-700x700.png"
import remove from "./../image/remove.png"


const Main = (props) => {

    let taskElements =
        props.tasksArr.map((e) =>
            (e.completed === false ? <div id={e.id} className={style.items}>
                <span>{e.taskText}</span>
                <div>
                    <button onClick={()=> addStyle(e.id)}>
                        <img src={success}/>
                    </button>
                    <button onClick={() => onRemove(e.id)}>
                        <img src={remove}/>
                    </button>
                </div>
            </div> : null)
            );

    let taskElementsDone =
        props.tasksArr.map((e) =>
            (e.completed === true ? <div id={e.id} className={e.completed === true ? style.styleFromButtonDone : style.items}>
                <span>{e.taskText}</span>
                <div>
                    <button onClick={()=> addStyle(e.id)}>
                        <img src={success}/>
                    </button>
                    <button onClick={() => onRemove(e.id)}>
                        <img src={remove}/>
                    </button>
                </div>
            </div> : null)
        );



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

    let addStyle = (id) => {
        props.toggleIsStyle(id);
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
            <main>
                <div>
                    <h2>Задания на день:</h2>
                    {taskElements}
                </div>
                <div>
                    <h2>Выполненые задания:</h2>
                    {taskElementsDone}
                </div>
            </main>
        </div>
    )
}

export default Main;