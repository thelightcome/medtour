const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
//const Nunjucks = require('nunjucks'); // used when the preprocessor is a function

const isProd = !process.argv.find((str) => str.includes('development'));

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'source-map' : 'inline-source-map',
  stats: 'minimal',

  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: './',
  },

  resolve: {
    // use aliases used in sources instead of relative paths like ../../
    alias: {
      '@': path.join(__dirname, 'src/'),
      '@views': path.join(__dirname, 'src/views/'),
      '@images': path.join(__dirname, 'src/assets/images/'),
      '@fonts': path.join(__dirname, 'src/assets/fonts/'),
      '@styles': path.join(__dirname, 'src/assets/styles/'),
      '@scripts': path.join(__dirname, 'src/assets/scripts/'),
    },
  },

  plugins: [
    new HtmlBundlerPlugin({
      // verbose: 'auto', // output information about the process to console in development mode only

      entry: {
        // define HTML templates here
        index: 'src/views/pages/home/index.html', // => dist/index.html
        'whyus/index': 'src/views/pages/whyus/index.html', // => dist/whyus.html
        'foreign/index': 'src/views/pages/foreign/index.html', // => dist/foreign.html
        'visa/index': 'src/views/pages/visa/index.html', // => dist/visa.html
        'info/index': 'src/views/pages/info/index.html', // => dist/info.html
        'sanatory/index': 'src/views/pages/sanatory/index.html', // => dist/sanatory.html
        'clinic/index': 'src/views/pages/clinic/index.html', // => dist/clinic.html
        'maternal/index': 'src/views/pages/maternal/index.html', // => dist/maternal.html
        'diagnostic/index': 'src/views/pages/diagnostic/index.html', // => dist/diagnostic.html
        'children-reabilitation/index': 'src/views/pages/children-reabilitation/index.html', // => dist/children-reabilitation.html
        'neurosurgery/index': 'src/views/pages/neurosurgery/index.html', // => dist/neurosurgery.html
        'president/index': 'src/views/pages/president/index.html', // => dist/president.html
        'umit/index': 'src/views/pages/umit/index.html', // => dist/umit.html
        'news/index': 'src/views/pages/news/index.html', // => dist/news.html
        'news-id/index': 'src/views/pages/news-id/index.html', // => dist/news-id.html
        'amg/index': 'src/views/pages/amg/index.html', // => dist/amg.html
        'kamt/index': 'src/views/pages/kamt/index.html', // => dist/kamt.html
        'check-up/index': 'src/views/pages/check-up/index.html', // => dist/kamt.html
        'clinics/index': 'src/views/pages/clinics/index.html', // => dist/clinics.html
        'sanatories/index': 'src/views/pages/sanatories/index.html', // => dist/sanatories.html
      },

      js: {
        // output filename of extracted JS from source script loaded in HTML via `<script>` tag
        filename: 'assets/js/[name].[contenthash:8].js',
        // inline: true; // inline compiled JS into HTML
      },

      css: {
        // output filename of extracted CSS from source style loaded in HTML via `<link>` tag
        filename: 'assets/css/[name].[contenthash:8].css',
        // inline: true; // inline compiled CSS into HTML
      },

      // render templates with the Nunjucks template engine
      preprocessor: 'nunjucks',
      // or you can use any template engine as a function like the following:
      //preprocessor: (content, { data }) => Nunjucks.renderString(content, data),
    }),
    new CopyPlugin({
      patterns: [
        { from: "public", to: "./" }
      ],
    }),
  ],

  module: {
    rules: [
      // styles
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },

      // fonts (load from `fonts` or `node_modules` directory only)
      {
        test: /[\\/]fonts|node_modules[\\/].+(woff(2)?|ttf|otf|eot|svg)$/,
        type: 'asset/resource',
        generator: {
          // group fonts by name
          filename: (pathData) => `assets/fonts/${path.basename(path.dirname(pathData.filename))}/[name][ext][query]`,
        },
      },

      // images (load from `images` directory only)
      {
        test: /[\\/]images[\\/].+(png|jpe?g|svg|webp|ico)$/,
        oneOf: [
          // inline image using `?inline` query
          {
            resourceQuery: /inline/,
            type: 'asset/inline',
          },
          // auto inline by image size
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 1024,
              },
            },
            generator: {
              filename: 'assets/img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  performance: {
    hints: false, // don't show the size limit warning when a bundle is bigger than 250 KB
  },

  devServer: {
    //open: true, // open browser
    compress: true,

    static: {
      directory: path.join(__dirname, './dist'),
    },

    // enable HMR
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true,
      },
    },

    // rewrite rules
    historyApiFallback: {
      rewrites: [{ from: /^\/$/, to: '/index.html' }],
    },
  },
};
