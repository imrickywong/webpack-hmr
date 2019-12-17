const path = require('path')
const update = compiler => {
  const config = compiler.options
  config.entry = {
    main: [
      path.resolve(__dirname, '../client/index.js'),
      path.resolve(__dirname, '../client/dev-server.js'),
      config.entry
    ]
  }
  compiler.hooks.entryOption.call(config.context, config.entry)
}

module.exports = update
