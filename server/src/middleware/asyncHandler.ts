import { NextFunction, Response } from '../types';

const asyncHandler = (fn) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;