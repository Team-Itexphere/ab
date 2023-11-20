import React, { useRef, useState } from 'react'

function ImageDragAndDrop({ base64Image, setBase64Image }: any) {
    const [images, setImages]: any = useState([])
    const [isDragging, setIsDragging]: any = useState(false);

    const fileInputRef: any = useRef();

    function selectFiles() {
        fileInputRef.current.click();
    }

    function onFileSelect(event: any) {

        const files = event.target.files;



        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++) {

            if (files[i].type.split('/')[0] !== 'image') continue;

            if (!images.some((e: any) => e.name === files[i].name) && images.length < 1) {
                const file = event.target.files[0];

                if (file) {
                    const reader = new FileReader();

                    reader.onloadend = () => {
                        // When the reader is done reading the file, the result will be a data URL
                        if (typeof reader.result === 'string') {
                            setBase64Image(reader.result);
                        }
                    };

                    // Read the file as a data URL
                    reader.readAsDataURL(file);
                }

                setImages((prevImages: any): any => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i])
                    }
                ])
            }
        }
    }

    function deleteImag(index: number) {
        setImages((prevImages: any): any =>
            prevImages.filter((_: any, i: any) => i !== index)
        )
    }

    function onDragOver(event: any) {
        event.preventDefault()
        setIsDragging(true);
        event.dataTransfer.dropEffect = "copy";

    }

    function onDragLeave(event: any) {
        event.preventDefault()
        setIsDragging(false);
    }

    function onDrop(event: any) {
        event.preventDefault()
        setIsDragging(false);
        const files = event.dataTransfer.files;
        

        for (let i = 0; i < files.length; i++) {

            if (files[i].type.split('/')[0] !== 'image') continue;

          

            if (!images.some((e: any) => e.name === files[i].name) && images.length < 1) {
   
                const file = event.dataTransfer.files[0];

               
                if (file) {
                    const reader = new FileReader();

                    reader.onloadend = () => {
                        // When the reader is done reading the file, the result will be a data URL
                        if (typeof reader.result === 'string') {
                            setBase64Image(reader.result);
                        }
                    };

                    // Read the file as a data URL
                    reader.readAsDataURL(file);
                }

                setImages((prevImages: any): any => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i])
                    }
                ])
            }
        }
    }

    return (
        <div className='w-1/2 '>
            <div className='card'>
                <div className='top'>
                    <p>Drag & Drop image uploading</p>
                </div>
                <div className='drag-area'
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                >

                    {isDragging ? (<span className='select'>
                        Drop image here
                    </span>) : (<>
                        Drag & Drop image here or {" "}
                        <span className='select' role='button' onClick={selectFiles}>
                            Browse
                        </span></>)}


                    <input type="file" name="file" className='file' multiple ref={fileInputRef} onChange={onFileSelect} />
                </div>
                <div className='container'>
                    {images.map((images: any, index: number): any => (
                        <div className='image' key={index}>
                            <span className='delete' onClick={() => deleteImag(index)}> &times;
                            </span>
                            <img src={images.url} alt="" />
                        </div>
                    ))}


                </div>

                {/* <button type='button'>
                    upload
                </button> */}
            </div>
        </div>
    )
}

export default ImageDragAndDrop