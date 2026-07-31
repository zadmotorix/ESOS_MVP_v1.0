import {Request, Response} from 'express';
import {TokenService} from '../services/TokenService';

const tokens = new TokenService();

export class SessionController {
  refresh(req: Request, res: Response) {
    const {refreshToken} = req.body;
    if (!refreshToken) return res.status(400).json({message:'refreshToken required'});
    const payload = tokens.verify(refreshToken);
    res.json({accessToken: tokens.generateAccessToken(payload as object)});
  }
}
