
let newID = Math.random().toString(36).substr(2, 9)
let initialState = {
    task: [
        {Id: newID, taskText: "yo"},
        {Id: newID, taskText: "ae"},
        {Id: newID, taskText: "OG"},
        {Id: newID, taskText: "hi"},
        {Id: newID, taskText: "privet"},
    ],
    newTaskText: "alo",
};

export const todo_reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-TASK":
            let newTask = state.newTaskText;
            return {
                ...state,
                task: [...state.task, {id: newID, taskText: newTask}],
                newTaskText: "",
            }
        case "UPDATE-NEW-TASK-TEXT":
            return { ...state, newTaskText: action.Text, }
        case "DELETE-TASK-ELEMENT" :
            return state.filter(item => item.Id !== action.id);
        case "DONE-BUTTON" :
            return false;
        default: return state;
    }
}

export const addTaskAC = () => {
    return {
        type: "ADD-TASK"
    }
};
export const updateTaskAC = (text) => {
    return {
        type: "UPDATE-NEW-TASK-TEXT", Text: text
    }
};
export const handleRemoveAC = (id) => {
    return {
        type: "DELETE-TASK-ELEMENT", id
    }
}
export const handleDoneAC = () => {
    return {
        type: "DONE-BUTTON",
    }
}

export default todo_reducer;