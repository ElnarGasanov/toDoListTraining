import React from "react";
import {connect} from "react-redux";
import {addTaskAC, handleDoneAC, handleRemoveAC, updateTaskAC} from "../redux/todo-reduser";
import Main from "./Main";



const mapStateToProps = (state) => {
    return {
        todo_reducer: state.todo_reducer,
        newTaskText: state.todo_reducer.newTaskText,
    }
}

let DialogsContainer = connect (mapStateToProps, {addTaskAC, updateTaskAC,handleRemoveAC,handleDoneAC}) (Main);

export default DialogsContainer;