import Link from 'next/link';
import React from 'react';
import { Navbar } from './navbar';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-24">
        Click <Link href="/documents/12345">here</Link> to go to documents
      </div>
    </div>
  );
};

export default Home;
