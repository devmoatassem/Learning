import React from 'react'
import { MdOutlineAssignment } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { BiMath } from "react-icons/bi";
import { SiApachemaven } from "react-icons/si";
import { FaUserAstronaut } from "react-icons/fa";


const ActiveAssignments = () => {
    const tableheader = [
        {
            id: 0,
            name: "S.No.",
        },
        {
            id: 1,
            name: "Subject",
        },
        {
            id: 2,
            name: "Assignment",
        },
        {
            id: 3,
            name: "Deadline",
        },
        {
            id: 4,
            name: "Marks",
        },
        {
            id: 5,
            name: "Note",
        },
    ];

    const headList = tableheader.map((item) => (
        <th key={item.id} className="text-left py-4 pr-4">
            {item.name}
        </th>
    ));


    // temporary data for table

    const tableData = [
        {
            id: 1,
            subject: <BiMath />,
            assignment: "Lorem dfhug efhdubg usd dhguidsghbn 1",
            deadline: "10/10/2021",
            marks: "10",

        },
        {
            id: 2,
            subject: <SiApachemaven />,
            assignment: "Assignment 4",
            deadline: "10/10/2021",
            marks: "20",

        },
        {
            id: 3,
            subject: <FaUserAstronaut />,
            assignment: "Assignment 1",
            deadline: "10/10/2021",
            marks: "10",

        },

    ];

    const tableBody = tableData.map((item) => (
        <>
            <tr key={item.id} className="text-left text-sm font-semibold border-b whitespace-nowrap">
                <td className='py-4'><input type="checkbox" /></td>
                <td>{item.subject}</td>
                <td className='pr-4'>{item.assignment}</td>
                <td className='pr-4'>{item.deadline}</td>
                <td className='pr-4'>{item.marks}</td>
                <td className='text-lg opacity-60 text-blue-500'><FaNoteSticky /></td>

            </tr>

        </>

    ));

    return (
        <div className='py-5 px-8 rounded-lg  border overflow-auto'>
            <table className='w-full'>
                <caption className='mb-2'>
                    <div className='sm:flex justify-between items-center text-sm'>
                        <div className='flex items-center font-bold gap-2'>
                            <div className='whitespace-nowrap'>Active Assignments</div>
                            <div className='text-lg text-blue-700'><MdOutlineAssignment /></div>
                        </div>
                        <div className='flex items-center gap-2 text-blue-700 font-semibold'>
                            <div className='whitespace-nowrap'>View all</div>
                            <div className='text-lg'><FaLongArrowAltRight /></div>
                        </div>
                    </div>
                </caption>
                <thead>
                    <tr className='text-sm text-gray-500'>
                        {headList}
                    </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
        </div>
    )
}

export default ActiveAssignments;