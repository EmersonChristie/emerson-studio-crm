import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templates = {
  model: 'templateModel.ts',
  service: 'templateService.ts',
  repository: 'templateRepository.ts',
  router: 'templateRouter.ts',
  modelTest: 'templateRouter.test.ts',
  serviceTest: 'templateService.test.ts',
};

const generateFile = (templatePath, outputPath, modelName) => {
  const template = fs.readFileSync(templatePath, 'utf8');
  const content = template.replace(/template/g, modelName).replace(/Template/g, capitalize(modelName));
  fs.writeFileSync(outputPath, content, 'utf8');
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const generateModel = (modelName) => {
  const baseDir = path.resolve(__dirname, '../src/api');
  const outputDir = path.resolve(baseDir, modelName);
  const testDir = path.resolve(outputDir, '__tests__');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir);
  }

  for (const [key, value] of Object.entries(templates)) {
    const isTest = key.endsWith('Test');
    const templatePath = isTest
      ? path.resolve(__dirname, 'template', '__tests__', value)
      : path.resolve(__dirname, 'template', value);
    const outputPath = isTest
      ? path.resolve(testDir, value.replace(/template/g, modelName))
      : path.resolve(outputDir, value.replace(/template/g, modelName));
    generateFile(templatePath, outputPath, modelName);
  }

  console.log(`Model ${capitalize(modelName)} generated successfully!`);
};

// Example usage
const modelName = process.argv[2];
if (!modelName) {
  console.error('Please provide a model name.');
  process.exit(1);
}

generateModel(modelName);
