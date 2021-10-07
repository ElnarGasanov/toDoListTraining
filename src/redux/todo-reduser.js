
let initialState = {
    task: [
        {id: 1, taskText: "html", completed: false},
        {id: 2, taskText: "css", completed: false},
        {id: 3, taskText: "js", completed: false},
        {id: 4, taskText: "react", completed: false},
    ],
    newTaskText: "new data",
};


export const todo_reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-TASK":
            let newTask = state.newTaskText;
            let newId = state.task.length + 1;
            return {
                ...state,
                task: [...state.task, {id: newId , taskText: newTask, completed: false}],
                newTaskText: "",
            }
        case "UPDATE-NEW-TASK-TEXT":
            return {...state, newTaskText: action.Text,}
        case "DELETE-TASK-ELEMENT" :
            let filteredItems = state.task.filter(item => item.id !== action.id)
            return {
                ...state,
                task: filteredItems,
            };
        case "TOGGLE_IS_STYLE":

            const newArray = state.task.map((element) => {
                if (element.id === action.id) {
                    element.completed = !element.completed;
                    return element;
                }
                else {return element;}

            });

            return {
                ...state,
                task: newArray,
            }
        default:
            return state;
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
    return {type: "DELETE-TASK-ELEMENT", id: id}
}

export const toggleIsStyle = (id) => ({type: "TOGGLE_IS_STYLE", id: id});

export default todo_reducer;