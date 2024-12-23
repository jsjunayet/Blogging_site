import { z } from 'zod';

const blogvalidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'please must be fill up title field',
      invalid_type_error: 'Name must be a string',
    }),
    content: z.string({
      required_error: 'please must be fill up content field',
      invalid_type_error: 'Name must be a string',
    }),
  }),
});
const blogUpdatevalidation = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'please must be fill up title field',
        invalid_type_error: 'Name must be a string',
      })
      .optional(),
    content: z
      .string({
        required_error: 'please must be fill up content field',
        invalid_type_error: 'Name must be a string',
      })
      .optional(),
  }),
});
export const BlogvalidationAll = {
  blogvalidation,
  blogUpdatevalidation,
};
