import * as path from 'path'
import webpack from 'webpack'
import webpackConfig from './webpack.config'
import sass from 'node-sass'
import fs from 'fs'
import util from 'util'

const writeFile = fs.promises.writeFile;

const dir = path.resolve();

// Generate css files
const sassFilesToBuild = [
  path.join(dir, './scss/main.scss'),
];
const cssStaticFolder = path.join(dir, '../assets/css');

const sassRender = util.promisify(sass.render);
sassFilesToBuild.forEach((sassFile) => {
  const basename = path.parse(sassFile).name;
  const outputPath = path.join(cssStaticFolder, basename) + '.css';
  sassRender({
    file: sassFile,
    sourceMap: true,
    outFile: outputPath,
    outputStyle: process.env.NODE_ENV === 'development' ? 'expanded' : 'compressed'
  }).then(async result => {
    try {
      await writeFile(outputPath, result.css);
      await writeFile(outputPath + '.map', result.map);
    } catch(err) {
      console.error(err.stack || err);
    }
  }).catch(err => {
    console.error(err.stack || err);
  });
});

webpack(webpackConfig, (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
});
