
require.paths.unshift('spec', './spec/lib', 'lib')
require('jspec')
require('unit/spec.helper')
userAgent = require('user-agent')

JSpec
  .exec('spec/unit/spec.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report()
