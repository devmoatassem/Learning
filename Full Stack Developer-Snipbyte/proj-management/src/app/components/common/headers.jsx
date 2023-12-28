import React from 'react'

const Headers = ({ title = "Title", description = "Description", customClass = "", headingColor="" }) => {
    return (
        <div className={customClass + " space-y-4"}>
            <div className={headingColor+' font-semibold text-4xl'}>
                {title}
            </div>
            <div className='text-sm'>
                {description}
            </div>
        </div>
    )
}

export default Headers;