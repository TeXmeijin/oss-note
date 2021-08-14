import fs from 'fs-extra';
import * as Log from './log';
import path from 'path';

export function getWorkingPath(pathFromWorkingDir: string): string {
  // Prevent directory traversal
  if (/\.\./.test(pathFromWorkingDir)) {
    Log.error(
      '取得するファイル/ディレクトリの名前に不正な文字列が含まれているため処理を終了します'
    );
    process.exit(1);
  }
  // remove beginning slash
  return path.join(process.cwd(), pathFromWorkingDir.replace(/^\//, ''));
}

export function getFileRaw(fullpath: string) {
  try {
    const raw = fs.readFileSync(fullpath, 'utf8');
    return raw;
  } catch (err) {
    return null;
  }
}

export function listDirnames(searchDirFullpath: string) {
  try {
    const allFiles = fs.readdirSync(searchDirFullpath, {
      withFileTypes: true,
    });
    return allFiles
      .filter((file) => file.isDirectory())
      .map(({ name }) => name);
  } catch (e) {
    return null;
  }
}

export function listFilenames(searchDirFullpath: string) {
  try {
    const allFiles = fs.readdirSync(searchDirFullpath);
    return allFiles;
  } catch (e) {
    return null;
  }
}

export function generateFileIfNotExist(fullpath: string, content: string) {
  fs.outputFileSync(
    fullpath,
    content,
    { flag: 'wx' } // Don't overwrite
  );
}
