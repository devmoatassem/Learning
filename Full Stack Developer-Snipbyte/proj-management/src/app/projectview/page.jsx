"use client";
import React from 'react'
import Header from '../components/projectView/header';
import Breadcrumb from '../components/projectView/breadcrumb';
import ProjectCard from '../components/projectView/projectCard';
import Column from '../components/projectView/column';




import Home from "../components/projectView/other/Home";
import { Provider } from 'react-redux';
import store from '../components/projectView/other/redux/store';

const Page = () => {
  return (
    // <Provider store={store}>
<>
<Header/>
<Breadcrumb/>
<ProjectCard/>
<Column/>

</>
       
        // {/* </Provider> */}
  )
}

export default Page