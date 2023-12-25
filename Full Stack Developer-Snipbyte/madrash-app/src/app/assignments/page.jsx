import React from 'react'
import PercentageCard from '../components/assignments/percentageCard';
import ActiveAssignments from '../components/assignments/activeAssignments';
import CurrentAssignments from '../components/assignments/currentAssignments';
import DueAssignment from '../components/assignments/dueAssignment';
import Inbox from '../components/assignments/Inbox';
import NoName from '../components/assignments/noName';

const Page = () => {
  return (
    <div>
        <PercentageCard/>
        <ActiveAssignments/>
        <CurrentAssignments/>
        <DueAssignment/>
        <Inbox  />  
        <NoName/>
    </div>
  )
}

export default Page;