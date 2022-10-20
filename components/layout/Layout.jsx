import Head from 'next/head';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Portfolio: Franco Ortega - Software Engineer</title>
        <meta
          name='description'
          content='Portfolio site for Franco Ortega - Software Engineer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <h1>Franco Ortega - Software Engineer</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
