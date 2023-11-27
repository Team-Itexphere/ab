import React, { useState } from 'react'
import workColumns from '../../../../data/workColumns.json'
import Task from '../Task/Task';

const Column = ({ colIndex }: any) => {

    const col: any = workColumns.find((col, i) => i === colIndex);

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
        // const { prevColIndex, taskIndex } = JSON.parse(
        //   e.dataTransfer.getData("text")
        // );

        // if (colIndex !== prevColIndex) {
        //   dispatch(
        //     boardsSlice.actions.dragTask({ colIndex, prevColIndex, taskIndex })
        //   );
        // }
    };

    const handleOnDragOver = (e: any) => {
        e.preventDefault();
    };

    return (
        <div
            onDrop={handleOnDrop}
            onDragOver={handleOnDragOver}
            className="scrollbar-hide   mx-5 pt-[20px] min-w-[280px] "
        >
            <p className=" font-semibold flex  items-center  gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
                <div className={`rounded-full w-4 h-4 ${randomColor} `} />
                {col.name} ({col.tasks.length})
            </p>

            {col.tasks.map((task: any, index: any) => (
                <Task key={index} taskIndex={index} colIndex={colIndex} />
            ))}
        </div>
    )
}

export default Column