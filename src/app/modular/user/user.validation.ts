import { z } from "zod";

const uservalidation = z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string()
})
export const uservalidationAll ={
    uservalidation
}