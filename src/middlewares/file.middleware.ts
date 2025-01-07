import { NextFunction, Request, Response } from "express";

class FileMiddleware {
  public isFileIdValid(type?: string) {
    this._type = type;
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        next();
      } catch (e) {
        next(e);
      }
    };
  }
}

export const fileMiddleware = new FileMiddleware();
