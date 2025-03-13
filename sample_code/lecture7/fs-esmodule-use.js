import { open } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

let fileHandle;
try {
  // Asynchronously open the file with 'r' mode (read)
  fileHandle = await open(
    dirname(fileURLToPath(import.meta.url)) + '/demo.txt',
    'r'
  );
  // Asynchronously read the file content with UTF-8 encoding
  const content = await fileHandle.readFile({ encoding: 'utf-8' });
  console.log(content);
} catch (err) {
  console.error(err);
} finally {
  if (fileHandle) {
    await fileHandle.close();
  }
}
