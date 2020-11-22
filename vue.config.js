const path = require('path')
const srcPath = path.resolve(__dirname, 'src')
const uiPath = path.resolve(__dirname, 'src/components/UI')

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': srcPath,
        '~': srcPath,
        '@ui': uiPath,
      },
    },
  },
}
