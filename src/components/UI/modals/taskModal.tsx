import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import projectSlice from '../../../redux/boardSlice';

const TaskModal = ({
    setIsAddTaskModalOpen,
    type,
    device,
    prevColIndex = 3,
}: any) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [newColIndex, setNewColIndex] = useState(prevColIndex);

    const onSubmit = (type: any) => {
        if (type === "add") {
            dispatch(
                projectSlice.actions.addTask({
                    title,
                    description: "description",
                    subtasks: [],
                    status: "",
                    newColIndex,
                })
            );
        } else {

        }
    };


    return (
        <div
            className={
                device === "mobile"
                    ? "  py-6 px-6 pb-40  absolute overflow-y-scroll  left-0 flex  right-0 bottom-[-100vh] top-0 dropdown "
                    : "  py-6 px-6 pb-40  absolute overflow-y-scroll  left-0 flex  right-0 bottom-0 top-0 dropdown "
            }
            onClick={(e) => {
                if (e.target !== e.currentTarget) {
                    return;
                }
                setIsAddTaskModalOpen(false);
            }}
        >

            {/* Modal Section */}

            <div
                className=" scrollbar-hide overflow-y-scroll max-h-[95vh]  my-auto  bg-white  text-black  font-bold
       shadow-md shadow-[#364e7e1a] max-w-md mx-auto  w-full px-8  py-8 rounded-xl"
            >
                <h3 className=" text-lg ">
                    {type === "edit" ? "Edit" : "Add New"} Task
                </h3>
                {/* Task Name */}

                <div className="mt-8 flex flex-col space-y-1">
                    <label className="  text-sm  text-gray-500">
                        Task Name
                    </label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="task-name-input"
                        type="text"
                        className=" bg-transparent  px-4 py-2 outline-none focus:border-0 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-1  ring-0  "
                        placeholder=" e.g Take coffee break"
                    />
                </div>

                {/* current Status  */}
                <div className="mt-8 flex flex-col space-y-3">

                    <button
                        onClick={() => {
                            //   const isValid = validate();
                            if (true) {
                                onSubmit(type);
                                setIsAddTaskModalOpen(false);
                                // type === "edit" && setIsTaskModalOpen(false);
                            }
                        }}
                        className=" w-full items-center text-white bg-[#635fc7] py-2 rounded-full "
                    >
                        {type === "edit" ? " save edit" : "Create task"}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default TaskModal