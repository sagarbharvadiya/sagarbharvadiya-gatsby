import React from 'react';
import Meta from "../component/Meta";
import Home from './Home';
import '../../styles.css';
import BoxModel from '../component/BoxModel';

const IndexPage = () => {
  return (
    <>
      <main>
        <BoxModel/>
        <title>sagarbharvadiya</title>
        <Meta />
        <Home />
      </main>
    </>
  );
};

export default IndexPage;
