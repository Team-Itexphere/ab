import React, { useState, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from "react-redux";

import workColumns from '../../../../data/workColumns.json'

const TaskViewModal = lazy(() => import('../../../../components/UI/modals/taskViewModal'))

const Task = ({ empIndex, taskIndex }: any) => {

    const [isTaskViewModalOpen, setIsTaskViewModalOpen] = useState(false);

    const employees = useSelector((state: any) => state.employees);

    const emp = employees.find((col: any, i: any) => i === empIndex);
    const task = emp.tasks.find((col: any, i: any) => i === taskIndex)

    // const isDraggable = empIndex === 3 ? true : false

    // let completed = 0;
    // let subtasks = task?.subtasks

    // subtasks?.forEach((subtask: any) => {
    //     if (subtask.isCompleted) {
    //         completed++
    //     }
    // })

    const handleOnDrag = (e: any) => {
        e.dataTransfer.setData(
            "text",
            JSON.stringify({ taskIndex, prevEmpIndex: empIndex })
        );
    };

    const width = 260 / 7.5 * Number(task.noOfHours);


    // const isDayFiledWithThisTask = () => {
    //     // const totalHours = col.tasks.reduce((acc: any, task: any) => acc + task.noOfHours, 0);
    //     // const days = Math.ceil(totalHours / 7.5);
    //     // let remainingHours = totalHours;


    //     // for (let i = 0; i < days; i++) {
    //     //     let dailyHours = remainingHours >= 7.5 ? 7.5 : remainingHours;
    //     //     col.tasks.filter((task: any) => {
    //     //         if (task.noOfHours <= dailyHours) {
    //     //             dailyHours -= task.noOfHours;
    //     //             remainingHours -= task.noOfHours;
    //     //             return true;
    //     //         }
    //     //         return false;
    //     //     })
    //     // }

    //     let totalHours = 0;

    //     for (let i = 0; i <= taskIndex; i++) {
    //         totalHours += col.tasks[i].noOfHours;
    //     }
    //     console.log('totalHours', totalHours)

    //     const days = Math.ceil(totalHours / 7.5);
    //     let remainingHours = totalHours;
    //     for (let i = 0; i < days; i++) {

    //         console.log('days', days)
    //         let dailyHours = remainingHours >= 7.5 ? 7.5 : remainingHours;
    //         console.log('dailyHours', dailyHours)
    //         col.tasks.filter((task: any) => {
    //             if (task.noOfHours <= dailyHours) {
    //                 dailyHours -= task.noOfHours;
    //                 remainingHours -= task.noOfHours;
    //                 return true;
    //             } else {
    //                 return false
    //             }
    //         })
    //     }
    //     return false
    // }

    return (
        <>
            <div
                onClick={() => {
                    setIsTaskViewModalOpen(true);
                }}
                draggable
                onDragStart={handleOnDrag}
                style={{ width: `${width}px` }}
                className={` rounded-md p-1 border-r-2 ${task.ProjectName === "V6 Mobile App" ? 'bg-blue-300' : task.ProjectName === "General" ? 'bg-orange-300' : task.ProjectName === "AbtracOnline" ? 'bg-fuchsia-300' : 'bg-lime-300'}  hover:text-[#635fc7]  cursor-pointer `}
            >
                <p className="text-sm font-semibold truncate  ">{task?.title}</p>
                <p className=" font-bold text-xs text-gray-500">
                    {task?.noOfHours} h
                </p>
            </div>

            {isTaskViewModalOpen && (
                <Suspense fallback={<p>Loarding ...</p>}>
                    <TaskViewModal
                        taskIndex={taskIndex}
                        empIndex={empIndex}
                        setIsTaskViewModalOpen={setIsTaskViewModalOpen}
                    />
                </Suspense>

            )}
        </>


    )
}

export default Task