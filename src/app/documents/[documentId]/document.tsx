'use client';

import React from 'react';
import { Editor } from './editor';
import { Toolbar } from './Toolbar';
import Navbar from './navbar';
import { Room } from './room';
import { Preloaded, usePreloadedQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

interface DocumentProps {
    preloadedDocument: Preloaded<typeof api.documents.getById>;
}

export const Document = ({ preloadedDocument }: DocumentProps) => {

    // document can still be updated/ renamed -> so we need to have a real time update that's 
    // why we need to pass it with this query.
    // initial load is being done with server Component and then after that
    // we do it with this hook.
    const document = usePreloadedQuery(preloadedDocument);

  return (
    <Room>
      <div className="min-h-screen bg-[#FAFBFD]">
        <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden">
          <Navbar data={document}/>
          <Toolbar />
        </div>

        <div className="pt-[114px] print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
};

export default Document;
