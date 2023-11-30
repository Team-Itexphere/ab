import React, { useState } from 'react'

import { useDispatch, useSelector } from "react-redux";

import workColumns from '../../../../data/workColumns.json'
import Task from '../Task/Task';
import projectSlice from '../../../../redux/boardSlice';

const Column = ({ colIndex }: any) => {

    const dispatch = useDispatch();
    const projects = useSelector((state: any) => state.projects);

    const activeProject = projects.find((project: any) => project.isActive)
    const activeColums = activeProject.columns;

    const col = activeColums.find((col: any, i: any) => i === colIndex)

    // const col: any = workColumns.find((col, i) => i === colIndex);

    const colors = [
        "bg-red-500",
        "bg-orange-500",
        "bg-blue-500",
        "bg-purple-500",
        "bg-green-500",
        "bg-indigo-500",
        "bg-yellow-500",
        "bg-pink-500",
        "bg-sky-500",
    ];



    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const randomColor = getRandomColor();

    const handleOnDrop = (e: any) => {
        const { prevColIndex, taskIndex } = JSON.parse(
            e.dataTransfer.getData("text")
        );

        if (colIndex !== prevColIndex) {
            dispatch(
                projectSlice.actions.dragTask({ colIndex, prevColIndex, taskIndex })
            );
        }
    };

    const handleOnDragOver = (e: any) => {
        e.preventDefault();
    };

    return (
        <div
            onDrop={handleOnDrop}
            onDragOver={handleOnDragOver}
            className=" mx-5 flex pt-[20px]"
        >
            <p className=" font-semibold flex  items-center min-w-[140px]  gap-2  text-[#828fa3]">
                {/* <div className={`rounded-full w-4 h-4 ${randomColor} `} /> */}
                {col.name} ({col.tasks.length})
            </p>

            <div className='scrollbar-hide flex gap-2 '>
                {col.tasks.map((task: any, index: any) => (
                    <Task key={index} taskIndex={index} colIndex={colIndex} />
                ))}
            </div>

        </div>
    )
}

export default Column