

##CREATE APP
- clean up the app
- update the pacakge.json

##DATABASE AND AUTHENICATION
- convex vdocs
- clerk docs
- providers.tsx

```
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

export function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <ClerkProvider publishableKey="pk_test_...">
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
         {children}
        </ConvexProviderWithClerk>
      </ClerkProvider>
    )
}
```

- setup convex object
```
const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);

import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";


const convex = new ConvexReactClient(
    process.env.NEXT_PUBLIC_CONVEX_URL as string
  );
export function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <ClerkProvider publishableKey="pk_test_...">
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
         {children}
        </ConvexProviderWithClerk>
      </ClerkProvider>
    )
}
```
- add publishable key test it out

##CREATE POST
- convex folder post.ts
- mutation
- test it out:

```
'use client'
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, useMutation, } from "convex/react";


export default function Home() {

  const createPost = useMutation(api.post.createPost)
  return (
    <div>
       <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <button
          onClick={() => {
            // Call the createPost mutation on button click
            createPost({
              title: 'Test from front end',
              description: 'Test description',
            });
          }}
        >
          Create Post
        </button>

      </Authenticated>
    </div>
  );
}


```
- build the schema from whats in the database

##GET POST
- add to the api:
```
export const getPost = query({
    async handler(ctx) {
        return await ctx.db.query('posts').collect()
    }
})
```
- add ot the page:

```
'use client'
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, useMutation, useQuery, } from "convex/react";


export default function Home() {

  const createPost = useMutation(api.post.createPost)
  const posts = useQuery(api.post.getPost)
  return (
    <div>
       <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <button
          onClick={() => {
            // Call the createPost mutation on button click
            createPost({
              title: 'Test from front end',
              description: 'Test description',
            });
          }}
        >
          Create Post
        </button>
        {posts?.map(post => (
          <div key={post._id}>
              {post.title}
          </div>
        ))}

      </Authenticated>
    </div>
  );
}

```

##ADD USER TO POST
- add token identifer to the schema
- update in the createPost
- updste schema and function
- test it out with a different username


##LOADING
- header.tsx
- move auth in page.tsx into header

