"use client";

import { Separator } from "@/components/ui/separator";
import { ClientSideSuspense } from "@liveblocks/react";
import { useOthers, useSelf } from "@liveblocks/react/suspense";

const AVATAR_SIZE = 36;

export const Avatars = () => {
    // useOther, useSelf -> cause a suspense to be triggred -> this will show the FullScreenLoader to avoid this we wrapped it in this
    return (
        <ClientSideSuspense fallback={null}>
            <AvatarStack />
        </ClientSideSuspense>
    )
};

const AvatarStack = () => {
    const users = useOthers();
    const currentUsers = useSelf();

    if(users.length === 0 ) return null;
    
    return (
        <>
        <div className="flex items-center">
            {currentUsers && (
                <div className="relative ml-2">
                    <Avatar src = {currentUsers.info.avatar} name="You"/>
                </div>
            ) }

            <div className="flex">
                {users.map(({connectionId, info}) => {
                    return (
                        <Avatar key={connectionId} src={info.avatar} name={info.name} />
                    )
                })}
            </div>
            </div>
            <Separator orientation="vertical" className="h-6" /> 
            </>
    )
}

interface AvatarProps {
    src: string;
    name: string;
};

const Avatar = ({name, src}: AvatarProps) => {

    return(
        <div 
            className="group -ml-2 flex shrink-0 place-content-center relative border-4 border-white rounded-full bg-gray-400"
            style={{width: AVATAR_SIZE, height: AVATAR_SIZE}}
            >
                <div className="opacity-0 group-hover:opacity-100 absolute top-full py-1 px-2 text-white text-xs rounded-lg mt-2.5 z-10 bg-black whitespace-nowrap transition-opacity">
                    {name}
                </div>
                <img src={src} alt={name} className="w-full rounded-full" />
        </div> 
    )
}

