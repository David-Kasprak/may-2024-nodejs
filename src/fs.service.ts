import fs from 'node:fs/promises'
import path from 'node:path'

const pathToFile = path.resolve(process.cwd(), 'DB', 'users.json');
const read = async () => {
    try {
        const json = await fs.readFile(pathToFile, 'utf-8');
        return json ? JSON.parse(json) : [];
    }
    catch (error) {
        console.log('Error: ', error.message);
    }
};
 const write = async (users) => {
    try {
        await fs.writeFile(pathToFile, JSON.stringify(users, null, 2));
    }
    catch (error) {
        console.log('Error: ', error.message);
    }
}

export { read, write };
