import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import workColumns from '../../data/workColumns.json'
import Sidebar from './UI/sidebar/Sidebar'
import Header from '../../components/UI/header/header'
import Column from './UI/Column/Column'


const WorkScheduleScreen = () => {

    const dispatch = useDispatch();
    const projects = useSelector((state: any) => state.projects);

    const activeProject = projects.find((project: any) => project.isActive)
    const activeColums = activeProject.columns;

    console.log('projects:: ', projects)
    console.log('activeProject :: ', activeProject)

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight
    ])

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize)
        }
    })

    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(true)


    return (
        <div className='scrollbar-hide overflow-y-scroll  h-screen'>
            <Header />
            <div
                className={
                    windowSize[0] >= 768 && isSideBarOpen
                        ? "bg-[#f4f7fd] scrollbar-hide  flex h-full overflow-x-scroll gap-6 ml-[161px] "
                        : "bg-[#f4f7fd]  scrollbar-hide  flex  h-full   overflow-x-scroll gap-6 "
                }
            >
                {windowSize[0] >= 768 && (
                    <Sidebar
                        isSideBarOpen={isSideBarOpen}
                        setIsSideBarOpen={setIsSideBarOpen}
                    />
                )}

                {activeColums.length > 0 ? (
                    <>
                        {activeColums.map((col: any, index: any) => (
                            <Column key={index} colIndex={index} />
                        ))}
                        {/* <div
                            onClick={() => {
                                setIsBoardModalOpen(true);
                            }}
                            className=" h-full flex justify-center items-center font-bold text-2xl hover:text-[#635FC7] transition duration-300 cursor-pointer bg-[#E9EFFA] scrollbar-hide mb-2   mx-5 pt-[90px] min-w-[280px] text-[#828FA3] mt-[15px] rounded-lg "
                        >
                            unassigned task
                        </div> */}
                    </>
                ) : (
                    <>
                        {/* <EmptyBoard type="edit" /> */}
                    </>
                )}
            </div>
        </div>

    )
}

export default WorkScheduleScreen