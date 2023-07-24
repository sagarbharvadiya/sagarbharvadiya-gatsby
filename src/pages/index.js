import React from 'react';
import Meta from "../component/Meta";
import Home from './Home';
import '../../styles.css';

const IndexPage = () => {
  return (
    <main>
      <Home />
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>sagarbharvadiya</title>
    <Meta />
  </>
);