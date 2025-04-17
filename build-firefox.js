// Firefox扩展打包脚本
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 确保目标目录存在
const distDir = path.join(__dirname, 'dist-firefox');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 构建项目
console.log('正在构建Firefox扩展...');

// 1. 首先构建项目
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`构建错误: ${error}`);
    return;
  }
  console.log('项目构建完成，准备打包Firefox扩展...');
  
  // 2. 复制dist目录内容到dist-firefox
  const srcDir = path.join(__dirname, 'dist');
  copyFolderRecursiveSync(srcDir, distDir);
  
  // 3. 使用Firefox兼容的manifest.json替换原有的manifest.json
  const firefoxManifestPath = path.join(__dirname, 'firefox_manifest.json');
  const targetManifestPath = path.join(distDir, 'manifest.json');
  
  fs.copyFileSync(firefoxManifestPath, targetManifestPath);
  console.log('已替换为Firefox兼容的manifest.json');
  
  // 4. 创建zip文件
  const zipFileName = 'jvmao-newtabs-firefox.zip';
  const zipFilePath = path.join(__dirname, zipFileName);
  
  // 在Windows环境下使用PowerShell创建zip文件
  const zipCommand = `powershell -command "Compress-Archive -Path '${distDir.replace(/\\/g, '/')}/*' -DestinationPath '${zipFilePath.replace(/\\/g, '/')}' -Force"`;
  
  exec(zipCommand, (zipError, zipStdout, zipStderr) => {
    if (zipError) {
      console.error(`打包错误: ${zipError}`);
      return;
    }
    console.log(`Firefox扩展打包完成: ${zipFileName}`);
  });
});

// 递归复制文件夹函数
function copyFolderRecursiveSync(source, target) {
  // 检查目标目录是否存在，不存在则创建
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  // 获取源目录中的所有文件和子目录
  const files = fs.readdirSync(source);

  // 遍历所有文件和子目录
  files.forEach(file => {
    const sourcePath = path.posix.join(source, file);
    const targetPath = path.posix.join(target, file);

    // 检查是文件还是目录
    if (fs.lstatSync(sourcePath).isDirectory()) {
      // 如果是目录，递归复制
      copyFolderRecursiveSync(sourcePath, targetPath);
    } else {
      // 如果是文件，直接复制
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}