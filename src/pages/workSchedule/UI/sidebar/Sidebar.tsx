import React, { useState, lazy, Suspense } from 'react'
import { useDispatch, useSelector } from "react-redux";

import projectData from '../../../../data/projects.json'

const TaskModal = lazy(() => import('../../../../components/UI/modals/taskModal'))

const Sidebar = ({ isSideBarOpen, setIsSideBarOpen }: any) => {

    const projects = useSelector((state: any) => state.projects);

    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSideBarOpen((curr: any) => !curr);
    };

    return (
        <div>
            <div
                className={
                    isSideBarOpen
                        ? "min-w-[161px] bg-white fixed  h-screen items-center left-0 z-20"
                        : "bg-[#635FC7] top-auto bottom-10 justify-center items-center hover:opacity-80 cursor-pointer  p-0 transition duration-300 transform fixed felx w-[56px] h-[48px] rounded-r-full  "
                }
            >
                <div>
                    {isSideBarOpen && (
                        <div className=" bg-white   w-full   py-4 rounded-xl">
                            <h3 className=" text-gray-600 font-semibold mx-4 mb-8 ">
                                ALL Projects ({projects?.length})
                            </h3>

                            <div className='flex flex-col h-[70vh] justify-between'>
                                <div>
                                    {projects.map((board: any, index: any) => (
                                        <div
                                            className={` flex items-baseline space-x-2 px-5 mr-8 rounded-r-full duration-500 ease-in-out py-4 cursor-pointer hover:bg-[#635fc71a] hover:text-[#635fc7]  
                                             ${board.isActive && " bg-[#70c75f] rounded-r-full text-white mr-8 "} 
                                            `}
                                            key={index}
                                            onClick={() => {
                                                // dispatch(boardsSlice.actions.setBoardActive({ index }));
                                            }}
                                        >
                                            {/* <img src={boardIcon} className="  filter-white  h-4 " />{" "} */}
                                            <p className=" text-lg font-bold ">{board.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}
                </div>
                <div
                    onClick={() => setIsTaskModalOpen((prevState) => !prevState)}
                    className=" flex  items-center mt-2  absolute bottom-32  text-lg font-bold bg-red-200 rounded-r-full hover:text-[#635FC7] cursor-pointer mr-6 mb-8 px-8 py-4 hover:bg-[#635fc71a] dark:hover:bg-white  space-x-2 justify-center  my-4 text-green-900 "
                >
                    {/* <img
                            className=" min-w-[20px]"
                            src='data:image/png;base64,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'
                            alt=" side bar show/hide"
                        /> */}
                    {isSideBarOpen && <p>+ Add Tasks </p>}
                </div>
                {/* Sidebar hide/show toggle */}
                {isSideBarOpen ? (


                    <div
                        onClick={() => toggleSidebar()}
                        className=" flex  items-center mt-2  absolute bottom-16  text-lg font-bold  rounded-r-full hover:text-[#635FC7] cursor-pointer mr-6 mb-8 px-8 py-4 hover:bg-[#635fc71a] dark:hover:bg-white  space-x-2 justify-center  my-4 text-gray-500 "
                    >
                        {/* <img
                            className=" min-w-[20px]"
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADu7u739/dqamro6Oj19fXMzMzl5eX6+vre3t5BQUG4uLitra2zs7OMjIzY2NhRUVGBgYFISEifn59hYWEZGRkqKip3d3c3Nzdubm5ZWVkiIiJgYGA8PDyVlZWIiIgwMDCcnJzExMTPz88eHh5svg/FAAAF9ElEQVR4nO2d61riQAyGC1JqQUAFwVVWZFfv/xb3hLtKk2+m07pJpvl+dzTvM7TN5NSicLlcLpfL5XK5XK7/prpa3K5325EObXfr20VV94c3O6ylmUitD7M+8C42e2kSoP3moiNfvZJmCGrV6de6kDY/SotkvnIubXuk5mUa4JW04S10lQJ4L211K923B/wqbXNL3bUF1PkGRLppB3gnbW+CWu2irXvwTbfxgJaeou8V/UQtpS1NVux78Una0GQ9xQHacNVoRTlwtbSVnRTjhh+kjeykQ+5bGLOJG2kTO2oTJNxJm9hRuxDgjF87WVbl+FyXxIV308ZlvaqslhPezFDsho1arOjrqdt2Evyh9KC2hv4Vd6y/Zq6/kCIsrhlL53jZlFk25RbIEbK24uhb1W4HRQm5XazgIvpd8cwvkCQsnklr8fvillwD3qKihLR3go+JN9SSr2CBKCEdTMLhjCO1ZAkWyBIuKXOPcAmZXUK3riwh+WDcwiXUCnhyliWkoxFwCbliDBbIEo6dsCknbMgJP1dOSMgJG3LCz5UTEtJFeDEu0f82T7j8c5R7eOEvMU04+3fMeWRP4JYJPyTAXjkLDBN+O/uTzC7aJWyEix7p68wSEoUSdDzTKiFV6vJAXmmUkIz30WabJKy/kDbQRlgknHIVyZeZEI7ZYnky4GePkMq3nkS+Ec0RcinBEReqt0b4wgMyJWvGCL8DQCZSb4sQFpsxKVpThLCOh8t+WSKEnStses8QIZ17PokvjLVDCMvKQfrSDCHta5/E14HYIYTNR6Q/aotwegR82wyiibyv/VM7thbLDiHwtYMlaiYIga8d0+ejn5Apo4v+M+oJYW9OTI+PdkKyoulNoUJYC4Tnce0P+hb1J3QT0qWTJ0U2L6smhA2A3+MAVROCYvtQla8NwmRf2woh7P+DvrYNwinqywn42iYIoa+9bzXJQych9LVbtpyrJIS+NqqZt0IIfW06DWqLsLOvrZ0QxrUjGlzVE8IW45Q5OtoI0+LahggfEGCsr62ZEMa1QXWeGULoa6fOXVNEWENfO3GQlSrCI+Dbt/G1tRKimUxfOkyUU0OIXvTBuLYJQgDIlFUaIwRFFq19bZ2EfFitva+tk/CRA4yKa1sg5MIy3e5BTYT572H+92H+z9L834cD8Gng0SkLv3QAZ4sBnA/zP+MXA4jT9JTXVk2Yf7x0ADHvAeQtBpB7GkD+cAA54AHk8QdQizGAepoi/5qoojc/XDEhrk2M9sM1E+ZfXxqoEY70w3UT4p7K8OBxA4T51+rj3uYs+i26++H6CdGQ+5h4uAFC7IevcyDEfvgx4IebIMQ9pLsMekiLwBfQYDzcCiGfJP4l5IebIUyOh9shxDMVeD/cEGH+czECfjg3GcMUIY6HM5ENW4TQD2cCqcYI4ZwoehOtEaJ4ON35bI4Q+OH0R0btEfJ+OP3hEYOE7NxE+nNqFgm52Zd5zNw7iYyH0wlio4TkN47oE4ZVQiIezuQVzRI2jxp5eG3vdTb3JIepguf64IfncXo61+XfR+qaj2OYJiyK2WG9f12vcpi5ly4nJOSEDTnh58oJCTlhQ074uXJCQk7YkCxhwrdkyWAe8n1lCckoOf4e8JFaws9ElyZM+KYzmVJHpTuyhGTuGNeo2Pq2OvXPQ+VidJ4SVNGJEtL7gcsamUIzPo4gSchk4/D0U3rfRyN2NrogIf0yHI0CdVTMFP8tt4tyhFyyMdQcztZEMJ1ltRQha2io9BaUQz5cXZfjc1E5zbtp47JeVVZLMPst2MuA+lksiE40vhesazGgcAk8dWNZUsSEBtisq14xrba2NzECMNAGoVyRvTawd061nuIAmZOzBUWPELH6O0VH9TPB1jm1uo8HDBReKxVd+sYKdgioVMtGd3u72Hf5vDolzbaDUzqUqcVT9L1K+Nk+RZonj9Iy8mJMGk/0php2eqjQqsNEuz+Mm1dpBqDXTVe+37pe6bwh57BeqqXqavE8mXPfrv/f2s8nz4uql91zuVwul8vlcrlcrjj9AHj4dY53AowyAAAAAElFTkSuQmCC'
                            alt=" side bar show/hide"
                        /> */}
                        {isSideBarOpen && <p> Hide Sidebar </p>}
                    </div>
                ) : (
                    <div className=" absolute p-5  " onClick={() => toggleSidebar()}>

                        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcrjhlciNqZ3N3WPRt25ZFE85Ey_1epc4Xw&usqp=CAU' alt="showSidebarIcon" /> */}
                    </div>
                )}
            </div>
            {isTaskModalOpen && (
                <Suspense fallback={<p>Loarding ...</p>}>
                    <TaskModal
                        setIsAddTaskModalOpen={setIsTaskModalOpen}
                        type="add"
                        device="" />
                </Suspense>

            )}
        </div>
    )
}

export default Sidebar