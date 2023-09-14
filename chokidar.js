const chokidar = require('chokidar')
const jest = require('jest')

// One-liner for current directory
jest.run('--detectOpenHandles --runInBand __tests__/Dict/Dict')
const watcher = chokidar.watch('src/dictionary/data/**')
watcher.on('change', (path, stats) => {
  jest.run('--detectOpenHandles --runInBand __tests__/Dict/Dict')
})