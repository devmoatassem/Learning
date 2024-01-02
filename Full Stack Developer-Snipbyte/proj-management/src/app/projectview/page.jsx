"use client";
import React from 'react'
import Header from '../components/projectView/header';
import Breadcrumb from '../components/projectView/breadcrumb';






import Home from "../components/projectView/other/Home";
import { Provider } from 'react-redux';
import store from '../components/projectView/other/redux/store';
import ProjectBoard from '../components/projectView/projectBoard';

const Page = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <ProjectBoard />
    </>


  )
}

export default Page