import { Router } from 'express';
import { tokenService } from '../services/tokenService.js';

const router = Router();
const TokenService = new tokenService();

router.get('/token', async (req, res) => {
  console.log(`This is a get operation`);
  const token = await TokenService.getToken();
  console.log(token);
  return res.status(200).json(token);
});

export default router;