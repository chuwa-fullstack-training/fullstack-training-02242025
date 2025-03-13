import { open } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

let fileHandle;//连接一个file
try {
  // Asynchronously open the file with 'r' mode (read)
  fileHandle = await open(
    dirname(fileURLToPath(import.meta.url)) + '/demo.txt',
    'r'
    //join(dirname(fileURLToPath(import.meta.url)), 'demo.txt')
    //解决不同系统层面不一样的path方式
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
