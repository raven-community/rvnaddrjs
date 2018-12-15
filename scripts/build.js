/**
 * @license
 * https://github.com/raven-community/rvnaddr
 * Copyright (c) 2018 MSFTserver
 * Copyright (c) 2018 Emilio Almansi
 * Distributed under the MIT software license, see the accompanying
 * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
 */

var shell = require('shelljs')
shell.config.fatal = true
var version = require('../package.json').version

shell.rm('-rf', 'dist')
shell.mkdir('-p', 'dist')

shell.exec('npx browserify src/rvnaddr.js --s rvnaddr', { silent: true })
  .to('dist/rvnaddrjs-' + version + '.js')
shell.echo('Generated file: dist/rvnaddrjs-' + version + '.js.')

shell.cp('LICENSE.js', 'dist/rvnaddrjs-' + version + '.min.js')
shell.exec('cat dist/rvnaddrjs-' + version + '.js | npx uglifyjs -c', { silent: true })
  .toEnd('dist/rvnaddrjs-' + version + '.min.js')
shell.echo('Generated file: dist/rvnaddrjs-' + version + '.min.js.')
