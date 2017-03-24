const { env, publicPath } = require('../configuration.js')

module.exports = {
  test: /\.(jpeg|png|gif|svg|eot|ttf|woff|woff2)$/i,
  use: [{
    loader: 'file-loader',
    options: {
      publicPath,
      name: env.NODE_ENV === 'production' ? '[name]-[hash].[ext]' : '[name].[ext]'
    }
  }]
}


module.exports = {
  	test: /\.css$/,
	use: [
	  {
	    loader: "style-loader"
	  },
	  {
	    loader: "css-loader"
	  }
	]
}


module.exports = {
  	test: /\.(woff|woff2)$/,
    loader: 'url-loader'
}


module.exports = {
  	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
}

module.exports = {
  	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader'
}

module.exports = {
  	test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
}