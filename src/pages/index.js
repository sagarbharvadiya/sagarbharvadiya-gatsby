import React from 'react';
import Meta from "../component/Meta";
import Home from './Home';
import '../../styles.css';
// import BoxModel from '../component/BoxModel';

const IndexPage = () => {
  return (
    <>
      <main className='bg-background !opacity-100 transition-opacity duration-300'>
        {/* <BoxModel/> */}
        <title>Web Developer | Sagar Bharvadiya</title>
        <Meta />
        <Home />
      </main>
    </>
  );
};

export default IndexPage;
