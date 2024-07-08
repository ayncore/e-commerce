import React from 'react'

interface MaxWidthWrapperProps {
    className?: string;
    children: React.ReactNode

}



const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
    return (
        <div className={`flex py-10 px-5 items-center justify-center  ${className}`}>

            {
                children
            }

        </div>
    )
}

export default MaxWidthWrapper