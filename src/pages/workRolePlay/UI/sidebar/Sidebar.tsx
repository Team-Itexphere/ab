import React from 'react'
import Row from './components/row';


type sidebarType = {
    isSideBarOpen: boolean
}
const Sidebar = ({ isSideBarOpen }: sidebarType) => {
    const demoArray = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

    return (
        <div>

            <div
                className={
                    isSideBarOpen
                        ? "min-w-[361px] bg-white fixed  h-screen items-center left-0 z-20"
                        : "bg-[#635FC7] top-auto bottom-10 justify-center items-center hover:opacity-80 cursor-pointer  p-0 transition duration-300 transform fixed felx w-[56px] h-[48px] rounded-r-full  "
                }
            >
                {demoArray.map((_, i) => (
                    <Row key={i} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar