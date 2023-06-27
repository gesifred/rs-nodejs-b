// n should be received from main thread
import { workerData, parentPort } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main threadz
    //console.log(`worker with ${workerData.number} fib spawn`)
    //if (workerData.number==12) throw new Error("custom error"); //to induce error to test rejection of promise
    const result = nthFibonacci(workerData.number);
    parentPort.postMessage(result);
};

sendResult();