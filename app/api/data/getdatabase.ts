import fs from 'fs/promises';
import path from 'path';

export default async function getDatabase() {
    const filePath = path.join(process.cwd(), 'app', 'api', 'data', 'db.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    return data;
}