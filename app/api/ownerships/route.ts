import { NextResponse } from 'next/server';
import getDatabase from '../data/getdatabase';

/**
 * Maneja la obtención de propiedades.
 * 
 * @param request - La solicitud HTTP recibida.
 * @returns Una respuesta HTTP con las propiedades paginadas.
 */
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1;
    const limit = url.searchParams.get('limit') || 10;
    const start = (Number(page) - 1) * Number(limit);
    const end = start + Number(limit);

    const data = await getDatabase();
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
