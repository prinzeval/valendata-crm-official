import { query,mutation } from "./_generated/server"
import { v } from "convex/values"

export const getProduct = query({
    args: {}, 
    handler :async (ctx,args) => {
        const products = await ctx.db.query("product").collect();
        return products
    },
})

export const addProduct = mutation({
    args: {
        name: v.string(),
        price: v.number(),
    },
    handler :async (ctx,args) => {
        const productId = await ctx.db.insert("product",{name:args.name,price:args.price});
        return productId
        
    },
})

export const deleteProduct = mutation({
    args: { 
        id: v.id("product"),
    },
    handler :async (ctx,args) => {
        await ctx.db.delete(args.id);
    },   
})
