import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {formatSize} from "~/lib/utils";

interface FileUploaderProps {
    onFileSelect: (file: File | null) => void;
}

const FileUploader = ({onFileSelect}: FileUploaderProps) => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;
        onFileSelect?.(file);
    }, [onFileSelect]);

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop,
        multiple: false,
        accept: {'application/pdf': ['.pdf']},
        maxSize: 20 * 1024 * 1024,
    })

    const file = acceptedFiles[0] || null;

    const [maxFileSize, setMaxFileSize] = useState(20 * 1024 * 1024);

    return (
        <div className={"w-full input"}>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={"space-y-4 cursor-pointer p-10"}>

                    {file ? (
                        <>
                            <div className="uploader-selected-file" onClick={(e) => e.stopPropagation()}>
                                <img src="/images/pdf.png" alt="pdf" className="size-10" />
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <p className="text-sm font-medium text-gray-200 truncate max-w-xs">
                                            {file.name}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            {formatSize(file.size)}
                                        </p>
                                    </div>
                                </div>
                                <button className="p-2 cursor-pointer" onClick={(e) => {
                                    onFileSelect?.(null)
                                }}>
                                    <div
                                        className="w-4 h-4 bg-white mask mask-squircle [mask-image:url('/icons/cross.svg')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]"
                                    ></div>

                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={"mx-auto w-16 h-16 flex items-center justify-center"}>
                                <img src={"/icons/info.svg"} alt="info" className={"size-20"}/>
                            </div>
                            <div>
                                <p className={"text-md text-gray-300"}>
                                <span className={"font-semi-bold"}>
                                    Click to upload
                                </span> or drag and drop
                                </p>
                                <p className={"text-md text-gray-300"}>
                                    PDF (max {formatSize(maxFileSize)})
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FileUploader;
