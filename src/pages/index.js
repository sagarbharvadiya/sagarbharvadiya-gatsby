import React, { useEffect, useState } from 'react';
import Meta from "../component/Meta";
import Home from './Home';
import Loading from '../component/Loading';

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false);

useEffect(() => {
  setTimeout(() => {
    setLoaded(true);
  }, 2000); // adjust the timeout to your liking
}, []);

  return (
    <>
      <main className='bg-background !opacity-100 transition-opacity duration-300'>
        {loaded ? (
          <>
            <title>Web Developer | Sagar Bharvadiya</title>
            <Meta />
            <Home />
          </>
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
};

export default IndexPage;