import { normalizeText } from '@/app/utils/NormalizeText';
import { NextResponse } from 'next/server';
import getDatabase from '../../data/getdatabase';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    let tipo = normalizeText(url.searchParams.get('type') ?? '');
    let ciudad = normalizeText(url.searchParams.get('city') ?? '');
    const data = await getDatabase();

    const filteredData = data.filter((property: any) => {
      const propertyTipo = normalizeText(property.tipo ?? '');
      const propertyCiudad = normalizeText(property.ciudad ?? '');

      if (tipo === null && ciudad === null) return false;

      if (tipo === "all") tipo = "";

      if (tipo && ciudad) {
        return propertyTipo === tipo && propertyCiudad === ciudad;
      }

      if (!tipo && ciudad) {
        return propertyCiudad === ciudad;
      }

      if (tipo && !ciudad) {
        return propertyTipo === tipo;
      }


      return true;
    });

    return NextResponse.json({
      total: filteredData.length,
      filters: {
        tipo: tipo || null,
        ciudad: ciudad || null,
      },
      data: filteredData,
    });
  } catch (error) {
    console.error('Error filtering properties:', error);
    return NextResponse.json({ error: 'Failed to filter data' }, { status: 500 });
  }
}
