import React from "react";
import {connect} from "react-redux";
import {addTaskAC, handleRemoveAC, toggleIsStyle, updateTaskAC} from "../redux/todo-reduser";
import Main from "./Main";



const mapStateToProps = (state) => {
    return {
        tasksArr: state.todoPage.task,
        newTaskText: state.todoPage.newTaskText,
    }
}

let DialogsContainer = connect (mapStateToProps,
    {addTaskAC, updateTaskAC,handleRemoveAC,toggleIsStyle})
(Main);

export default DialogsContainer;