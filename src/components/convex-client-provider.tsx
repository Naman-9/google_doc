'use client';

import { Authenticated, Unauthenticated, AuthLoading, ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ReactNode } from 'react';
import { ClerkProvider, useAuth, SignIn } from '@clerk/nextjs';
import { FullscreenLoader } from './full-screen-loader';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>

        <Unauthenticated>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <SignIn routing='hash'/>
          </div>
        </Unauthenticated>

        <AuthLoading>
          <FullscreenLoader label="Auth Loading..."/>
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
