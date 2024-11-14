import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    description: v.string(),
    title: v.string(),
    tokenIdentifer: v.string(),  // Required field
  }).index('by_tokenIdentifier', ['tokenIdentifer']),
});
