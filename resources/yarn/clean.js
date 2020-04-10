const rimraf = require('rimraf');
const util = require('util');
const path = require('path');

const cwd = process.cwd();
const rimrafPromise = util.promisify(rimraf);

const dirs = ['node_modules', '.next', 'dist', '.etmp', 'reports', 'docs'];

const clearAll = async () => Promise.all(
  dirs.map(dir => rimrafPromise(path.resolve(cwd, dir))),
);

(async () => {
  await clearAll();
  console.log('Cleared'); // eslint-disable-line no-console
})();
