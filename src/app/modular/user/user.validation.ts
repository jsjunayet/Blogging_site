import { z } from 'zod';

const userRegistervalidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'please must be fill up name field',
      invalid_type_error: 'Name must be a string',
    }),
    email: z
      .string({
        required_error: 'please must be fill up email field',
        invalid_type_error: 'Name must be a string',
      })
      .email(),
    password: z.string({
      required_error: 'please must be fill up password field',
      invalid_type_error: 'Name must be a string',
    }),
  }),
});
const userLoginvalidation = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'please must be fill up email field',
        invalid_type_error: 'Name must be a string',
      })
      .email(),
    password: z.string({
      required_error: 'please must be fill up password field',
      invalid_type_error: 'Name must be a string',
    }),
  }),
});
export const uservalidationAll = {
  userLoginvalidation,
  userRegistervalidation,
};
