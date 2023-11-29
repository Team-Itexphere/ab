import { createSlice } from "@reduxjs/toolkit"
import projectData from "../data/projects.json"

const projectSlice = createSlice({
    name: 'projects',
    initialState: projectData,
    reducers: {
        addTask: (state, action) => {
            const { title, noOfHours, subtasks, newColIndex } =
                action.payload;
            const task = { title, noOfHours, subtasks };
            const board = state.find((board) => board.isActive);
            const column = board.columns.find((col, index) => index === newColIndex);
            column.tasks.push(task);
        },
        dragTask: (state, action) => {
            const { colIndex, prevColIndex, taskIndex } = action.payload;

            const activeProject = state.find((project) => project.isActive)
            const prevColData = activeProject.columns.find((col, i) => i === prevColIndex);
            const task = prevColData.tasks.splice(taskIndex, 1)[0];
            activeProject.columns.find((_, i) => i === colIndex).tasks.push(task)
            console.log('dragTask ::', task)
        }
    }
})

export default projectSlice;