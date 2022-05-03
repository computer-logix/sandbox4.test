const path = require('path');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = {
  output: {
    chunkFilename: 'js/[name].js?id=[chunkhash]',
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx", ".vue"],
    alias: {
      '@': path.resolve('resources/js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new WebpackShellPluginNext({
      onBeforeBuild: {
        scripts: [
          'echo === BeforeBuild ===',
        ],
        blocking: true,
        parallel: false
      },
      onBuildError: {
        scripts: [
          'echo === BuildError ===',
        ],
        blocking: true,
        parallel: false
      },
      onBuildStart: {
        scripts: [
          'echo === BuildStart ===',
        ],
        blocking: true,
        parallel: false
      },
      onBuildEnd: {
        scripts: [
          'echo === BuildEnd ===',
        ],
        blocking: true,
        parallel: false
      },
      onBuildExit: {
        scripts: [
          'echo === BuildExit ===',
        ],
        blocking: true,
        parallel: false
      },
      onWatchRun: {
        scripts: [
          'echo === WatchRun ===',
        ],
        blocking: true,
        parallel: false
      },
      onDoneWatch: {
        scripts: [
          'echo === DoneWatch ===',
        ],
        blocking: true,
        parallel: false
      },
      onBeforeNormalRun: {
        scripts: [
          'echo === BeforeNormalRun ===',
        ],
        blocking: true,
        parallel: false
      },
      onAfterDone: {
        scripts: [
          'echo === AfterDone ===',
        ],
        blocking: true,
        parallel: false
      },
    })
  ],
};