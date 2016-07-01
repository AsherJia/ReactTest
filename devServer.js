import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './config/webpack.config';

new WebpackDevServer(webpack(config), {
  hot: true,
  progress: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  },
  historyApiFallback: true
}).listen(8080, 'localhost', function(error, result){
  if (error) {
    console.log(error);
  }

  console.log('Listening at localhost:3000');
});
