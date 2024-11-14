'use client'
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, } from "convex/react";

export default function Home() {
  return (
    <div>
       <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />

      </Authenticated>
    </div>
  );
}
