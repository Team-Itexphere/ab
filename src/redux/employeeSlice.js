import { createSlice } from "@reduxjs/toolkit";
import employeeData from "../data/employee.json"

const employeeSlice = createSlice({
    name: 'employees',
    initialState: employeeData,
    reducers: {
        dragTask: (state, action) => {
            const { empIndex, prevEmpIndex, taskIndex, newProjectName } = action.payload;

            const prevEmpData = state.find((emp, index) => index === prevEmpIndex)
            const taskData = prevEmpData.tasks.splice(taskIndex, 1)[0]
            const newtaskData = {
                title: taskData.title,
                ProjectName: newProjectName,
                noOfHours: taskData.noOfHours
            }
            state.find((emp, index) => index === empIndex).tasks.push(newtaskData)
        },
        addTask: (state, action) => {
            const { empIndex = 3, title, projectName = "", noOfHours } = action.payload;

            const unassignedTaskList = state.find((emp, index) => emp.name === "unassigned")
            const newTaskData = {
                title: title,
                ProjectName: projectName,
                noOfHours: noOfHours
            }
            unassignedTaskList.tasks.push(newTaskData)
        },
        editTask: (state, action) => {
            const {
                newEmpIndex,
                taskIndex,
                title,
                projectName,
                noOfHours,
            } = action.payload;

            const empData = state.find((emp, index) => index === newEmpIndex)
            // const taskData = empData.tasks.splice(taskIndex, 1)[0]
            // const newtaskData = {
            //     title: taskData.title,
            //     ProjectName: projectName,
            //     noOfHours: taskData.noOfHours
            // }

            // taskData.find((task, index) => index === taskIndex)

            const taskData = empData.tasks.find((task, index) => index === taskIndex);
            taskData.title = title
            taskData.ProjectName = projectName
            taskData.noOfHours = noOfHours
            return
        }
    }
})

export default employeeSlice;