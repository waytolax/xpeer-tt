const path = require('path')
const srcPath = path.resolve(__dirname, 'src')

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': srcPath,
        '~': srcPath,
      },
    },
  },
}
