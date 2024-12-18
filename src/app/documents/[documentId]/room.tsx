"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";


export function Room({ children }: { children: ReactNode }) {

    const params = useParams();

  return (
    <LiveblocksProvider publicApiKey={"pk_dev_P1gaLazy8sI4B7pF2gRE0MABOFKHCZP2lm4tge2xoofUr0X2y-JydsrZWRic2oy_"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}