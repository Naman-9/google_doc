"use client";

import Link from 'next/link';
import React from 'react';
import { Navbar } from './navbar';
import { TemplatesGallery } from './templates-gallery';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

const Home = () => {

  const documents = useQuery(api.documents.get);
  if(documents === undefined) {
    return (
      <p>Loading...</p>
    )
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-24">
        <TemplatesGallery />
        {
          documents?.map((document) => (
            <span className="" key={document.title}>{document.title}</span>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
