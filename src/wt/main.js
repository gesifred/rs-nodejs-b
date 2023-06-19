import { cpus } from 'os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    // Write your code here
    const cores = cpus().length;
    const workerScript = "worker.js";
    const __filename = fileURLToPath(import.meta.url);
    const dirWorker = path.join(path.dirname(__filename), workerScript);
    const createWorker = (n) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(dirWorker, {
                workerData: { number: n },
            })
            worker.on("message", (data) => {
                resolve(data);
            });
            worker.on("error", (msg) => {
                reject(`An error ocurred: ${msg}`);
            });
        })
    }
    const workers = [];
    for (let i = 0; i < cores; i++) {
        const n = 10;
        workers.push(createWorker(n + i));
    }
    const results = await Promise.allSettled(workers);
    const final = [];
    for (let result of results) {
        if (result.status == 'fulfilled') {
            final.push({ status: 'resolved', data: result.value });
        } else {
            final.push({ status: 'error', data: null })
        }
    }
    console.log(final);
};

await performCalculations();
