import { z } from "zod";

const blogvalidation = z.object({
    body:z.object({
        title:z.string(),
        content:z.string()
    })
})
const blogUpdatevalidation = z.object({
    body:z.object({
        title:z.string().optional(),
        content:z.string().optional()
    })
})
export const BlogvalidationAll ={
    blogvalidation,
    blogUpdatevalidation
}