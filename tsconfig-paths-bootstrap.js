const tsConfig = require('./tsConfig.json');
const tsconfigPaths = require('tsconfig-paths');

tsconfigPaths.register({
    baseUrl: tsConfig.compilerOptions.outDir,
    paths: tsConfig.compilerOptions.paths,
})