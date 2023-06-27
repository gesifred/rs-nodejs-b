import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readdir } from 'node:fs/promises';


const list = async () => {
    // Write your code here 
    const srcFolder = "files";
    const __filename = fileURLToPath(import.meta.url);
    const dir = path.dirname(__filename);
    try {
        const files = await readdir(path.join(dir, srcFolder));
        console.log(files); //print all array of filenames
        /*for (const file of files)
            console.log(file);*/
    } catch (err) {
        //console.log(err)
        if (err.code === "ENOENT") {
            throw new Error("FS operation failed");
        }
    }
};

await list();
