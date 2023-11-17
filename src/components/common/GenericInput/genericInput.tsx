import React, { ChangeEvent } from 'react';

type InputProps = {
    type?: string;
    Title: string
    value?: string | number;
    placeholder?: string;
    handleInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    name: string
    containerStyle: any
};





const GenericInput: React.FC<InputProps> = ({
    type,
    Title,
    value,
    placeholder = '',
    handleInputChange,
    name,
    containerStyle
}) => {
    return (
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
                />
            </div>
        </div>

    );
};

export default GenericInput;
