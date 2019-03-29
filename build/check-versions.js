'use strict'

const chalk = require('chalk')
const semver = require('semver')
const packageConfig = require('../package.json')
const shell = require('shelljs')

function exec(cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [{
  name: 'node',
  currenVersion: semver.clean(process.version),
  versionRequirement: packageConfig.engines.node
}]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []
  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]
    if (!semver.satisfies(mod.currenVersion, mod.versionRequirement)) {
      warnings.push(mod.name + '' + chalk.red(mod.currenVersion) + 'sholud be' + chalk.green(mod.versionRequirement))
    }
  }

  if (warnings.length) {
    console.log('Warning Begin')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    // console.log()
    for (let i = 0; i < warnings.length; i++) {
      const warnning = warnings[i]
      console.warn('Current Warning' + warnning)
    }

    console.log('Warning End')
    process.exit(1)
  }
}