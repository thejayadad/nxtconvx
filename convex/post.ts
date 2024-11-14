import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

// Mutation to create a new post
export const createPost = mutation({
    args: {
      title: v.string(),
      description: v.string(),
    },
    async handler(ctx, args) {
      // Get the user identity (userId)
      const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier;

      // If no userId (i.e., not authenticated), throw an error
      if (!userId) {
        throw new ConvexError("Not Authenticated");
      }

      // Insert the new post into the database, associating it with the userId
      await ctx.db.insert("posts", {
        title: args.title,
        description: args.description,
        tokenIdentifer: userId,  // Ensure that tokenIdentifer is included
      });
    },
  });

// Query to get posts only for the authenticated user
export const getPost = query({
  async handler(ctx) {
    // Get the user identity (userId)
    const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier;

    // If the user is not authenticated, return an empty array
    if (!userId) {
      return [];
    }

    // Query the database for posts associated with the userId
    return await ctx.db
      .query("posts")
      .withIndex("by_tokenIdentifier", (q) => q.eq("tokenIdentifer", userId)) // Filter by userId
      .collect();
  },
});
