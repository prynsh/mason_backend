import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface AuthenticatedRequest extends Request {
  userId?: string;
}

export function middleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const token = req.headers["authorization"] || "";
  
  try {
    const jwtSecret = process.env.JWT_SECRET;
    
    if (!jwtSecret) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }
    
    const decoded = jwt.verify(token, jwtSecret) as { userId: string };
    
    if (decoded) {
      req.userId = decoded.userId;
      next();
    } else {
      res.status(403).json({
        message: "You are not authorized to access this resource"
      });
    }
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(403).json({
      message: "You are not authorized to access this resource"
    });
  }
}