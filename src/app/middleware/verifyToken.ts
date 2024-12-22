import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new Error("Token is not found");
  }

  try {
    const decoded = jwt.verify(token as string, 'secret1234');
    if (!decoded) {
      throw new Error("This user is not authorized");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (req as any).user = decoded;    
    next(); 
  } catch (error:unknown) {
    res.status(401).json({ message: error });
  }
};