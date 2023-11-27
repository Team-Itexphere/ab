import React from 'react'

import workColumns from '../../../../data/workColumns.json'

const Task = ({ colIndex, taskIndex }: any) => {

    const col = workColumns.find((col, i) => i === colIndex)

    const task = col?.tasks.find((col, i) => i === taskIndex)

    let completed = 0;
    let subtasks = task?.subtasks

    subtasks?.forEach((subtask) => {
        if (subtask.isCompleted) {
            completed++
        }
    })

    const handleOnDrag = (e: any) => {
        // e.dataTransfer.setData(
        //   "text",
        //   JSON.stringify({ taskIndex, prevColIndex: colIndex })
        // );
    };

    return (
        <div>
            <div
                onClick={() => {
                    //   setIsTaskModalOpen(true);
                }}
                draggable
                onDragStart={handleOnDrag}
                className=" w-[280px] first:my-5 rounded-lg  bg-white   shadow-[#364e7e1a] py-6 px-3 shadow-lg hover:text-[#635fc7]  cursor-pointer "
            >
                <p className=" font-bold tracking-wide ">{task?.title}</p>
                <p className=" font-bold text-xs tracking-tighter mt-2 text-gray-500">
                    {completed} of {subtasks?.length} completed tasks
                </p>
            </div>
        </div>
    )
}

export default Task