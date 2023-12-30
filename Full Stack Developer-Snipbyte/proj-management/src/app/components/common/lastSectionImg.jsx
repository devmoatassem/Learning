'use client';
import React from 'react'
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const Lastsectionimg = () => {

    const series1 = [{
        name: 'Data-1',
        data: [1, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }]
    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            colors: ['#b9d4fc']
        },
        title: {
            text: 'Likes',
            align: 'left'
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        xaxis: {
            labels: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
    }

    return (
        <div className='h-full w-full'>
            <ApexCharts options={options} series={series1} type="line" height={400} />
        </div>
    )
}

export default Lastsectionimg