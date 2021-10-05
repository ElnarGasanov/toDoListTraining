import React from "react";
import {connect} from "react-redux";
import {addTaskAC, handleRemoveAC, toggleIsStyle, updateTaskAC} from "../redux/todo-reduser";
import Main from "./Main";



const mapStateToProps = (state) => {
    return {
        todo_reducer: state.todo_reducer,
        newTaskText: state.todo_reducer.newTaskText,
        isStyle: state.todo_reducer.isStyle,
    }
}

let DialogsContainer = connect (mapStateToProps,
    {addTaskAC, updateTaskAC,handleRemoveAC,toggleIsStyle})
(Main);

export default DialogsContainer;