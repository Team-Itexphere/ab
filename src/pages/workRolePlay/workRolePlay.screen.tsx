import React, { useEffect, useState } from 'react'
import Header from '../../components/UI/header/header'
import Sidebar from './UI/sidebar/Sidebar'

const WorkRolePlay = () => {

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

    // // Simulated tasks for demonstration
    // const tasks = [
    //     { id: 'task-1', content: 'Task 1' },
    //     { id: 'task-2', content: 'Task 2' },
    //     // ... More tasks
    // ];

    // // Generate calendar sections (for simplicity, consider a month of 30 days)
    // const daysInMonth = 30;
    // const sections = [];
    // for (let i = 7; i < daysInMonth; i += 7) {
    //     const section = tasks.slice(i, i + 7); // Get tasks for this section

    //     [i,]
    //     sections.push(i);
    // }

    // [
    //     {
    //         mounth: 'may',
    //         week: 1,
    //         Days: [1, 2, 3, 4, 5, 6, 7],
    //     },
    //     {
    //         mounth: 'may',
    //         week: 2,
    //         Days: [8, 9, 10, 11, 12, 13, 14],
    //     },
    //     {
    //         mounth: 'may',
    //         week: 3,
    //         Days: [15, 16, 17, 18, 19, 20, 21],
    //     },
    //     {
    //         mounth: 'may',
    //         week: 4,
    //         Days: [22, 23, 24, 25, 26, 27, 28],
    //     },
    // ]


    const month = 'May';
    const daysInMonth = 31; // Assuming May has 31 days

    const weeksInMonth = [];
    let currentDay = 1;

    while (currentDay <= daysInMonth) {
        console.log('currentDay ::', currentDay)
        const daysForWeek = [];

        for (let i = 0; i < 7 && currentDay <= daysInMonth; i++) {
            daysForWeek.push(currentDay);
            currentDay++;
        }

        weeksInMonth.push({
            month,
            week: weeksInMonth.length + 1,
            Days: daysForWeek,
        });
    }

    console.log('weeksInMonth ::', weeksInMonth);
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
        <div className='scrollbar-hide overflow-y-scroll  h-screen'>
            <Header />

            <div
                className={
                    windowSize[0] >= 768 && isSideBarOpen
                        ? "bg-[#f4f7fd] scrollbar-hide  flex h-full overflow-x-scroll gap-2 ml-[361px] "
                        : "bg-[#f4f7fd] scrollbar-hide  flex  h-full   overflow-x-scroll gap-6 "
                }
            >
                {windowSize[0] >= 768 && (
                    <Sidebar isSideBarOpen={isSideBarOpen} />
                )}
                <div className='flex '>
                    {weeksInMonth.map((col, index) => (
                        <div className='min-w-[361px]  bg-white border-l-2 border-gray-200'>
                            <p className='text-center text-base font-semibold'>{col.month}</p>
                            <div className='flex w-full bg-gray-100 '>
                                {col.Days.map((day, i) =>
                                    <div className={`flex-grow text-center ${i !== 6 && ' border-r-[1px] border-r-gray-200'} border-b-2  `}>
                                        <p className=''>{day}</p>
                                    </div>
                                )}
                            </div>

                            <div className='flex w-full  '>
                                {col.Days.map((day, i) =>
                                    <div onDrop={handleOnDrop}
                                        onDragOver={handleOnDragOver}
                                        className={`h-screen flex-grow ${i !== 6 && ' border-r-[1px] border-r-gray-200'}`}>

                                    </div>
                                )}
                            </div>
                        </div>

                    ))}
                </div>

            </div>




        </div>
    )
}

export default WorkRolePlay