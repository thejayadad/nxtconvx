'use client'
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, AuthLoading, useMutation, useQuery, } from "convex/react";
import Box from "../Box";
import Logo from "../logo/logo";
import Search from "./search";
import UserMenu from "./user-menu";
import Categories from "./categories";

const Header = () => {
  return (
    <header className='w-full border-b bg-white shadow-sm z-10'>
      <div className="py-4 border-b-[1px] w-full">
        <Box>
          <div className="flex items-center w-full justify-between gap-3 md:gap-0">
              <Logo />
              <Search />
               <Unauthenticated>
               <SignInButton />
               </Unauthenticated>
               <Authenticated>
                <div className="flex items-center space-x-2">
                <UserButton />
                <div>
                  <UserMenu />
                </div>
                </div>
               </Authenticated>
               <AuthLoading>Loading...</AuthLoading>
          </div>
        </Box>
      </div>
      <Categories />
    </header>
  )
}

export default Header


// <Unauthenticated>
// <SignInButton />
// </Unauthenticated>
// <Authenticated>
// <UserButton />
// </Authenticated>
// <AuthLoading>Loading...</AuthLoading>