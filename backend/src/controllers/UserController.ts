import { UserService } from '../services/UserService';
const service = new UserService();
export class UserController {
  async profile(req:any,res:any){ res.json(await service.profile(req.params.id)); }
}
