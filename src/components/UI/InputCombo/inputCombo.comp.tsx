import React from 'react'
import { faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIconComp from '../../common/FontAwesomeIcon/fontAwesomeIcon';


function InputBoxCombo({
    Title,
    name,
    placeholder,
    containerStyle
}: any) {
    return (
        <div className={`w-full ${containerStyle}`}>
            <p className='font-medium text-base text-gray-700'>{Title}</p>
            <div className="relative mt-1 rounded-md shadow-sm">
                <input
                    type="text"
                    name={name}
                    id="price"
                    className="block w-full rounded-md border-0 py-2 pl-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none"
                    placeholder={placeholder}

                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <FontAwesomeIconComp icon={faCaretDown} className='h-5 w-5 text-gray-700' />
                    <FontAwesomeIconComp icon={faXmark} className='h-5 w-5 mx-2 text-gray-700' />
                </div>
            </div>
        </div>
    )
}

export default InputBoxCombo