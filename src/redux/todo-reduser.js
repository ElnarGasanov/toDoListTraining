
let initialState = {
    task: [
        {id: 1, taskText: "yo"},
        {id: 2, taskText: "ae"},
        {id: 3, taskText: "OG"},
        {id: 4, taskText: "hi"},
        {id: 5, taskText: "privet"},
    ],
    newTaskText: "alo",
    isStyle: false,
};

export const todo_reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-TASK":
            let newTask = state.newTaskText;
            return {
                ...state,
                task: [...state.task, {id: 6, taskText: newTask}],
                newTaskText: "",
            }
        case "UPDATE-NEW-TASK-TEXT":
            return { ...state, newTaskText: action.Text, }
        case "DELETE-TASK-ELEMENT" :
            let filteredItems = state.task.filter(item => item.id !== action.id)
            return {
                ...state,
                task: filteredItems,
            };
        case "TOGGLE_IS_STYLE":
            return { ...state, isStyle: action.isStyle, id: action.id }
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
export const handleRemoveAC = (id) => {return {type: "DELETE-TASK-ELEMENT", id}}

export const toggleIsStyle = (isStyle, id) => ({ type:"TOGGLE_IS_STYLE", isStyle, id });

export default todo_reducer;