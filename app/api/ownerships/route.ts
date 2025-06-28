import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'app', 'api', 'data', 'db.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading db.json:', error);
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}
