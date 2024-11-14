import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createPost = mutation({
    args: {
        title: v.string(),
        description: v.string()
    },
    async handler(ctx, args){
        await ctx.db.insert('posts', {
            title: args.title,
            description: args.description
        })
    }
})

export const getPost = query({
    async handler(ctx) {
        return await ctx.db.query('posts').collect()
    }
})