import React from 'react'

const PercentageCard = () => {
    // circular bar data
    const height_width = 130;
    const stroke = 15;
    const percentage = 90;
    const radius = (height_width - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100 * circumference);
    return (
        <div className='flex flex-col items-center p-5 border rounded-xl'>
            <div className='flex items-center gap-4 mb-4'>
                <div className='w-4 h-4 bg-red-600'></div>
                <div className='mt-0.5 font-bold text-sm'>Due Assignments</div>
            </div>
            {/* Handling circular progress bar */}
            <div className={`relative w-[${height_width}px] h-[${height_width}px] p-[${stroke}px] rounded-full`}>
                <div className={`w-[${height_width-2*stroke}px] h-[${height_width-2*stroke}px] rounded-full flex items-center justify-center`}>
                    <div className='text-base font-bold'>
                        {percentage}%
                    </div>
                </div>
                <svg className='absolute top-0 left-0' width={height_width} height={height_width}>
                    <circle className='progress-ring__circle' stroke='blue' strokeWidth={`${stroke}px`} fill='transparent' r={radius} cx={height_width/2} cy={height_width/2}
                        strokeDasharray={circumference + ' ' + circumference} strokeLinecap='round'
                        strokeDashoffset={offset} />
                </svg>
            </div>
        </div>
    )
}

export default PercentageCard