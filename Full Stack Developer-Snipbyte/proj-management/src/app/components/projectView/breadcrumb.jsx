import React from 'react'
import { GrNext } from "react-icons/gr";
import ProfilesArray from '../common/profilesArray';
import { profiles } from '../common/tempdata';
import Button from '../common/button';
import { VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { MdOutlineTableRows } from "react-icons/md";
import { FaTableCellsLarge } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";

const Breadcrumb = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3 text-2xl'>Project <GrNext /> BoardView</div>
                <div className='flex items-center'><ProfilesArray profiles={profiles.content} showadd={false} css={" h-12 w-12 bg-btyellow "} />
                    <Button button={'+ Add Member'} customClass='bg-btyellow text-white text-sm rounded-lg w-fit px-5' />
                </div>
            </div>
            <div className='flex items-center justify-between'>

                <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-3 text-bgdark-grey'>
                        <VscLayoutSidebarLeftOff /> Board
                    </div>
                    <div className='flex items-center gap-3 text-bgdark-grey'>
                        <MdOutlineTableRows /> Timline
                    </div>
                    <div className='flex items-center gap-3 text-bgdark-grey'>
                        <FaTableCellsLarge /> Table
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center text-sm font-semibold gap-2 bg-slate-200 text-bgdark-grey p-2 rounded-lg'> Filter
                        <IoFilterSharp />
                    </div>
                    <div className='bg-slate-200 text-bgdark-grey p-2 rounded-lg'>
                        <BsThreeDotsVertical />
                    </div>
                </div>
            </div>

        </>

    )
}

export default Breadcrumb