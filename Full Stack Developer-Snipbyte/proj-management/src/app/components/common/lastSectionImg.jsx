'use client';
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
import React from 'react'
import StatsCard from './lastSectionImg/statsCard';
import { SiMinutemailer } from "react-icons/si";

const Lastsectionimg = () => {

    const series = [{
        name: 'Work Done',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Pending Work',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }, {
        name: 'Total Work',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]

    }]
    const options = {
        chart: {
            type: 'bar',
            height: 250
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '75%',
                endingShape: 'rounded',

            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 5,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
       
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    }

    return (
        <>
            <div className='p-5 relative'>
                <div className='h-full w-full bg-white p-5 shadow-lg rounded-lg '>
                    <div className='font-semibold text-sm'>Total Work</div>
                    <ApexCharts options={options} series={series} type="bar" height={200} />
                </div>
                <div className='absolute -top-2 left-32'>
                    <StatsCard icon={<SiMinutemailer />} data={"200"} dataType={"Work"} percent={"70.86"} status={"profit"}/>
                </div>
                <div className='absolute bottom-36 -right-5'>
                    <StatsCard icon={<SiMinutemailer />} data={"200"} dataType={"Work"} percent={"70.86"} status={"loss"}/>
                </div>
                <div className='absolute -bottom-5 -left-5'>
                    <StatsCard icon={<SiMinutemailer />} data={"200"} dataType={"Work"} percent={"70.86"} status={"profit"}/>
                </div>
            </div>

        </>

    )
}

export default Lastsectionimg