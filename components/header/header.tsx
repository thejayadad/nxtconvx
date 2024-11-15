'use client'
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, AuthLoading, useMutation, useQuery, } from "convex/react";

const Header = () => {
  return (
    <header className='w-full border-b flex items-center h-20'>
        <nav className='mx-auto max-w-screen-lg p-4 flex items-center justify-between w-full'>
            <div className='text-xl font-extrabold tracking-widest leading-tight text-gray-600'>Logo</div>
            <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
      <AuthLoading>Loading...</AuthLoading>
        </nav>
    </header>
  )
}

export default Header