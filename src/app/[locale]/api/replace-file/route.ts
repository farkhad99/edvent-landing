import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';
import { Readable } from 'stream';

import { verifyToken } from '@/utils/auth';

const Busboy = require('busboy');

export const POST = async (req: Request) => {
  const token = req.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token || !verifyToken(token)) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  const url = new URL(req.url);
  const filenameToReplace = url.searchParams.get('filename');

  if (!filenameToReplace || typeof filenameToReplace !== 'string') {
    return NextResponse.json(
      { success: false, message: 'Filename is required as a query parameter' },
      { status: 400 }
    );
  }

  const publicDir = path.join(process.cwd(), 'public');
  const targetPath = path.join(publicDir, filenameToReplace);

  if (!targetPath.startsWith(publicDir)) {
    return NextResponse.json(
      { success: false, message: 'Invalid file path' },
      { status: 400 }
    );
  }

  // Convert ArrayBuffer to Buffer outside of Promise executor
  const arrayBuffer = await req.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const stream = Readable.from(buffer);

  return new Promise<NextResponse>((resolve, reject) => {
    const busboy = Busboy({
      headers: { 'content-type': req.headers.get('content-type') || '' }
    });

    busboy.on('file', (_: any, file: any) => {
      const filePath = path.join(publicDir, filenameToReplace);
      const writeStream = fs.createWriteStream(filePath);

      file.pipe(writeStream);

      writeStream.on('close', () => {
        resolve(
          NextResponse.json(
            { success: true, message: 'File replaced successfully' },
            { status: 200 }
          )
        );
      });

      writeStream.on('error', (error) => {
        console.error('Error writing file:', error);
        reject(
          NextResponse.json(
            {
              success: false,
              message: 'Internal server error while processing file'
            },
            { status: 500 }
          )
        );
      });
    });

    busboy.on('error', (error: any) => {
      console.error('Busboy error:', error);
      reject(
        NextResponse.json(
          {
            success: false,
            message: 'Internal server error while processing file'
          },
          { status: 500 }
        )
      );
    });

    stream.pipe(busboy);
  });
};
