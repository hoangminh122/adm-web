import * as fs from 'fs';
import { promisify } from 'util';

export const writeFilePromise = promisify(fs.writeFile);
export const statPromise = promisify(fs.stat);
