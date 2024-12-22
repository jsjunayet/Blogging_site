/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";

export const globalMiddleWare = (error:any, req:Request, res:Response, next:NextFunction)=>{
    res.status(500).json({
        success: false,
        message:error.message,
        errorsource:error
      })
    }