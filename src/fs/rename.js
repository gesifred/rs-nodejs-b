import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { rename as renamePromise } from 'node:fs/promises';

const rename = async () => {
    // Write your code here 
    try {
        const srcFolder = "files";
        const fileWrongName = "wrongFilename_copy.txt";
        const fileNewName = "properFilename.md"
        const __filename = fileURLToPath(import.meta.url);
        const dir = path.dirname(__filename);
        await renamePromise(path.join(dir, srcFolder, fileWrongName), path.join(dir, srcFolder, fileNewName));
    } catch (err) {
        //console.log(err);
        if(err.code === "ENOENT"){
            throw new Error("FS operation failed");
        }
    }
};

await rename();
