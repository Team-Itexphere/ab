import React, { useState, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const TaskModal = lazy(() => import('./taskModal'))
const EllipsisMenu = lazy(() => import('../EllipsisMenu/ellipsisMenu'))

const TaskViewModal = ({
    taskIndex, empIndex, setIsTaskViewModalOpen
}: any) => {
    const dispatch = useDispatch();
    const employees = useSelector((state: any) => state.employees);

    const empTasks = employees.find((emp: any, index: any) => index === empIndex)
    const taskData = empTasks.tasks.find((task: any, index: any) => index === taskIndex)

    const [isElipsisMenuOpen, setIsElipsisMenuOpen] = useState(false)
    const [isEdittaskModalOpen, setIsEdittaskModalOpen] = useState(false)

    const onClose = (e: any) => {
        if (e.target !== e.currentTarget) {
            return
        }
        setIsTaskViewModalOpen(false)
    }

    const setOpenEditModal = () => {
        setIsEdittaskModalOpen(true)
        setIsElipsisMenuOpen(false);
    }

    const setOpenDeleteModal = () => {
        console.log('will do that soon')
    }

    return (
        <div
            onClick={onClose}
            className='fixed right-0 top-0 px-2 py-4 overflow-scroll z-50 left-0 bottom-0 justify-center items-center flex dropdown scrollbar-hide'
        >
            {/* Modal Section */}
            <div
                className='scrollbar-hide overflow-y-scroll max-h-[95vh] min-h-[200px] my-auto bg-white text-black font-bold 
                shadow-md shadow-[#364e7e1a] max-w-md mx-auto w-full p-8 rounded-xl'
            >
                <div
                    className='relative flex justify-between w-full items-center'
                >
                    <h1 className='text-lg'>{taskData.title}</h1>
                    <img
                        onClick={() => {
                            setIsElipsisMenuOpen((prevState) => !prevState);
                        }}
                        src="https://cdn-icons-png.flaticon.com/512/3388/3388771.png"
                        alt="elipsis"
                        className='cursor-pointer h-6'
                    />

                    {isElipsisMenuOpen && (
                        <Suspense fallback={<p>Loarding ...</p>}>
                            <EllipsisMenu
                                setOpenEditModal={setOpenEditModal}
                                setOpenDeleteModal={setOpenDeleteModal}
                                type="Task"
                            />
                        </Suspense>

                    )}
                </div>

                <p
                    className='text-gray-500 font-[600] tracking-widest text-sm pt-6'
                >NoOfHours : {taskData.noOfHours} hours</p>

                <p
                    className='text-gray-500 font-[600] tracking-widest text-sm pt-6'
                >project : {taskData.ProjectName}</p>
            </div>

            {isEdittaskModalOpen && (
                <Suspense fallback={<p>Loarding ...</p>}>
                    <TaskModal
                        setIsAddTaskModalOpen={setIsEdittaskModalOpen}
                        setIsTaskViewModalOpen={setIsTaskViewModalOpen}
                        type="edit"
                        taskIndex={taskIndex}
                        prevColIndex={empIndex}
                    />
                </Suspense>
            )}
        </div>
    )
}

export default TaskViewModal