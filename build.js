import fs from 'fs-extra';
import path from 'node:path';
import del from 'del';
import md5 from 'md5';
import UglifyJS from 'uglify-es';

const distPath = path.resolve(import.meta.dirname, 'dist');
const srcPath = path.resolve(import.meta.dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

