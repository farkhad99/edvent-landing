// utils/auth.ts
import jwt from 'jsonwebtoken';

// You would normally store these in environment variables
const JWT_SECRET = 'your-super-secret-key-2024';
const ADMIN_CREDENTIALS = {
  login: 'admin',
  password: 'admin'
};

export const generateToken = () => {
  return jwt.sign({ authorized: true }, JWT_SECRET, { expiresIn: '24h' });
};

export const verifyToken = (token: string): boolean => {
  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
};

export const getAdminCredentials = () => ADMIN_CREDENTIALS;
