import React from 'react'
import { faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIconComp from '../../common/FontAwesomeIcon/fontAwesomeIcon';

import type { MenuProps } from 'antd';

type gg = {
    Title?: any
    name?: any
    placeholder?: any
    containerStyle?: any
    value: any
    handleInputChange: any
    dropdownArray: MenuProps['items']
    showOption: boolean
    onFocus: any
    onBlur: any
    onSelectItem: any
}


function InputBoxCombo({
    Title,
    name,
    placeholder,
    containerStyle,
    value,
    handleInputChange,
    dropdownArray,
    showOption,
    onFocus,
    onBlur,
    onSelectItem
}: gg) {
    // console.log('dropdownArray::', dropdownArray)

    return (

        <>
            {/* <Dropdown menu={{ items: dropdownArray }} trigger={['click']} onOpenChange={(val) => console.log('val', val)}> */}
            <div className={`w-full ${containerStyle}`}>
                <p className='font-medium text-base text-gray-700'>{Title}</p>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                        value={value}
                        type="text"
                        name={name}
                        id="price"
                        className="block w-full rounded-md border-0 py-2 pl-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none"
                        placeholder={placeholder}
                        onChange={handleInputChange}
                        onFocus={() => onFocus()}
                        onBlur={() => onBlur()}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <FontAwesomeIconComp icon={faCaretDown} className='h-5 w-5 text-gray-700' />
                        <FontAwesomeIconComp icon={faXmark} className='h-5 w-5 mx-2 text-gray-700' />
                    </div>
                </div>
                {showOption && (
                    <div className=' mt-3 border-2 border-gray-300  rounded-md shadow-md  transition duration-700 ease-in-out p-3'>

                        {dropdownArray?.map((item: any, index) => {
                            return (
                                <div key={`dropdownArray-${index}`} onClick={() => onSelectItem(item)}>
                                    <p className='p-1 border-b-2 cursor-pointer'>{item?.DisbursementName} </p>
                                </div>
                            )
                        })}
                    </div>
                )}

            </div>
            {/* </Dropdown> */}


        </>

    )
}

export default InputBoxCombo