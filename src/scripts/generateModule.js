const fs = require('fs');
const path = require('path');

const TEMPLATE_DIR = path.join(__dirname, '..', 'templates', 'module');

const replacePlaceholders = (content, moduleName) => {
  return content
    .replace(/user/g, moduleName)
    .replace(/User/g, moduleName.charAt(0).toUpperCase() + moduleName.slice(1));
};

const copyTemplate = (src, dest, moduleName) => {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((child) => copyTemplate(path.join(src, child), path.join(dest, child), moduleName));
  } else {
    const content = fs.readFileSync(src, 'utf8');
    const newContent = replacePlaceholders(content, moduleName);
    fs.writeFileSync(dest, newContent);
  }
};

const generateModule = (moduleName) => {
  const targetDir = path.join(__dirname, '..', 'api', moduleName);
  if (fs.existsSync(targetDir)) {
    console.error(`Module ${moduleName} already exists`);
    process.exit(1);
  }
  copyTemplate(TEMPLATE_DIR, targetDir, moduleName);
  console.log(`Module ${moduleName} created successfully`);
};

const [, , moduleName] = process.argv;

if (!moduleName) {
  console.error('Please provide a module name');
  process.exit(1);
}

generateModule(moduleName);
