import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1;
    const limit = url.searchParams.get('limit') || 10;
    const start = (Number(page) - 1) * Number(limit);
    const end = start + Number(limit);

    const filePath = path.join(process.cwd(), 'app', 'api', 'data', 'db.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    const paginatedData = data.slice(start, end);

    return NextResponse.json({
      total: data.length,
      page,
      limit,
      data: paginatedData,
    });
  } catch (error) {
    console.error('Error reading db.json:', error);
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}
