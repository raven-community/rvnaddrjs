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

shell
  .exec('git push')
  .exec('git push --tags')
  .exec('npm publish')
