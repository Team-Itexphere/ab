import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import workColumns from '../../../../data/workColumns.json'

const Task = ({ colIndex, taskIndex }: any) => {

    const projects = useSelector((state: any) => state.projects);

    const activeProject = projects.find((project: any) => project.isActive)
    const activeColums = activeProject.columns;

    const col = activeColums.find((col: any, i: any) => i === colIndex);
    const task = col.tasks.find((col: any, i: any) => i === taskIndex)

    // const isDraggable = colIndex === 3 ? true : false
    // const col = workColumns.find((col, i) => i === colIndex)
    // const task = col?.tasks.find((col, i) => i === taskIndex)

    let completed = 0;
    let subtasks = task?.subtasks

    subtasks?.forEach((subtask: any) => {
        if (subtask.isCompleted) {
            completed++
        }
    })

    const handleOnDrag = (e: any) => {
        e.dataTransfer.setData(
            "text",
            JSON.stringify({ taskIndex, prevColIndex: colIndex })
        );
    };

    const w = 260 / 7.5 * Number(task.noOfHours);

    console.log('w ::', Number(task.noOfHours))
    return (

        <div
            onClick={() => {
                //   setIsTaskModalOpen(true);
            }}
            draggable
            onDragStart={handleOnDrag}
            style={{ width: `${w}px` }}
            className={` rounded-lg  bg-white hover:text-[#635fc7]  cursor-pointer `}
        >
            {/* <p className=" font-bold tracking-wide ">{task?.title}</p>
            <p className=" font-bold text-xs tracking-tighter mt-2 text-gray-500">
                {task?.noOfHours} h
            </p> */}
        </div>

    )
}

export default Task