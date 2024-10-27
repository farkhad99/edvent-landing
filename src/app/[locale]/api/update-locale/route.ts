import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import pathLib from 'path';

import { verifyToken } from '@/utils/auth';

type RequestBody = {
  value: string;
  path: string;
};

function setNestedValue(obj: any, path: string, value: string): boolean {
  const keys = path.split('.');
  let current = obj;

  for (let i = 0; i < keys.length - 1; i += 1) {
    const key = keys[i];
    if (
      !((key as string) in current) ||
      typeof current[key as string] !== 'object'
    ) {
      current[key as string] = {};
    }
    current = current[key as string];
  }

  const lastKey = keys[keys.length - 1];
  const hadProperty = (lastKey as string) in current;
  current[lastKey as string] = value;

  return hadProperty;
}

export const POST = async (req: Request) => {
  const token = req.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token || !verifyToken(token)) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  if (req.method !== 'POST') {
    return NextResponse.json(
      {
        success: false,
        message: 'Method not allowed. Please use POST.'
      },
      { status: 405 }
    );
  }

  try {
    const { value, path: localizationPath }: RequestBody = await req.json();

    if (!value || typeof value !== 'string') {
      return NextResponse.json(
        {
          success: false,
          message: 'Value is required and must be a string'
        },
        { status: 400 }
      );
    }

    if (!localizationPath || typeof localizationPath !== 'string') {
      return NextResponse.json(
        {
          success: false,
          message: 'Path is required and must be a string'
        },
        { status: 400 }
      );
    }

    if (!/^[a-zA-Z0-9._]+$/.test(localizationPath)) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Invalid path format. Use only letters, numbers, dots, and underscores.'
        },
        { status: 400 }
      );
    }

    const localeFilePath = pathLib.join(
      process.cwd(),
      'src',
      'locales',
      'en.json'
    );
    const fileContent = await fs.readFile(localeFilePath, 'utf-8');
    const localeData = JSON.parse(fileContent);

    const keyExisted = setNestedValue(localeData, localizationPath, value);
    await fs.writeFile(
      localeFilePath,
      JSON.stringify(localeData, null, 2),
      'utf-8'
    );

    return NextResponse.json(
      {
        success: true,
        message: keyExisted
          ? 'Value updated successfully'
          : 'New value created successfully',
        updatedPath: localizationPath,
        newValue: value
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating locale:', error);

    if (error instanceof Error && error.message.includes('ENOENT')) {
      return NextResponse.json(
        { success: false, message: 'Locale file not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error while updating locale file'
      },
      { status: 500 }
    );
  }
};
