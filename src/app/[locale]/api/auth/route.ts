// pages/api/auth.ts
import { NextResponse } from 'next/server';

import { generateToken, getAdminCredentials, verifyToken } from '@/utils/auth';

export const POST = async (req: Request) => {
  // const { login, password } = req.body;
  const { login: correctLogin, password: correctPassword } =
    getAdminCredentials();
  const body = await req.json();
  if (body.login === correctLogin && body.password === correctPassword) {
    const token = generateToken();
    return NextResponse.json({ token }, { status: 200 });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
};

export const GET = async (req: Request) => {
  const token = req.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token || !verifyToken(token)) {
    return NextResponse.json(
      { message: 'Unauthorized', success: false },
      { status: 401 }
    );
  }

  return NextResponse.json(
    { success: true, message: 'Valid token' },
    { status: 200 }
  );
};
