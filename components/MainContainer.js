import React from 'react';
import Head from "next/head";

const MainContainer = ({title, description, children}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {children}
      </div>
    </>
  );
};

export default MainContainer;
