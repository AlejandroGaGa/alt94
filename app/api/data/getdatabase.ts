import fs from 'fs/promises';
import path from 'path';


/* 
* @description: Obtiene la base de datos de las propiedades
* @returns: La base de datos de las propiedades
* @example:
* const data = await getDatabase();
 */
export default async function getDatabase() {
    const filePath = path.join(process.cwd(), 'app', 'api', 'data', 'db.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    return data;
}