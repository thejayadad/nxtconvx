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
              title: 'Test from front end 2',
              description: 'Test description 2',
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
