const fs = require('fs');
const globby = require('globby');
const uglify = require('uglify-es');

const jsFiles = globby.sync([
  'src/**/*.js',
  'dist/bundle.js'
]);

for (const jsFile of jsFiles) {
  const before = fs.readFileSync(jsFile).toString();
  const after = uglify.minify(before).code;
  fs.writeFileSync(jsFile.replace('src', 'dist'), after);
}

console.log(`${jsFiles.join(', ')} are minified`);
