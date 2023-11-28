import React, { useState } from 'react'
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const Row = () => {
    const [isOpen, setIsOpen] = useState(false)

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

    const handleOnDrag = (e: any) => {
        // @ts-ignore
        // e.dataTransfer.setData(
        //     "text",
        //     // @ts-ignore
        //     JSON.stringify({ taskIndex, prevColIndex: colIndex })
        // );
    };

    return (
        <div className='border-b-2'>
            <div className=' max-w-[361px] flex gap-2 '>
                <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt=""
                    className='object-cover h-12 w-12'
                />
                <div className='flex-grow'>
                    <p className='font-bold'>Greg Clark</p>
                    <p className='text-xs font-light'>Structural Engineer</p>
                </div>

                {isOpen ? <UpOutlined style={{ fontSize: '12px', color: 'gray', padding: 7 }} onClick={() => setIsOpen(!isOpen)} /> : <DownOutlined style={{ fontSize: '12px', color: 'gray', padding: 7 }} onClick={() => setIsOpen(!isOpen)} />}


            </div>

            {isOpen &&
                <div>
                    <div
                        draggable
                        onDragStart={handleOnDrag}
                        className='flex cursor-move justify-end min-h-[35px] gap-2 my-2 px-1'>
                        <div>
                            <p className='font-light text-xs text-right'>TM Consultant</p>
                            <p className='text-sm font-semibold'>170599-499 Bower Ave- structural A...</p>
                        </div>

                        <div className='bg-emerald-400 min-h-[35px] w-3 rounded-md' />
                    </div>
                    <div
                        draggable
                        onDragStart={handleOnDrag}
                        className='flex justify-end min-h-[35px] gap-2 my-2  px-1'>
                        <div>
                            <p className='font-light text-xs text-right'>TM Consultant</p>
                            <p className='text-sm font-semibold'>220989-36 Main Street ...</p>
                        </div>

                        <div className='bg-orange-400 min-h-[35px] w-3 rounded-md' />
                    </div>
                    <div
                        draggable
                        onDragStart={handleOnDrag}
                        className='flex justify-end min-h-[35px] gap-2 my-2  px-1'>
                        <div>
                            <p className='font-light text-xs text-right'>TM Consultant</p>
                            <p className='text-sm font-semibold'>170599-499 Bower Ave- structural A...</p>
                        </div>

                        <div className='bg-emerald-400 min-h-[35px] w-3 rounded-md' />
                    </div>
                </div>

            }
        </div>

    )
}

export default Row