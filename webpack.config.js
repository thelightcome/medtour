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
        'okjetpes/index': 'src/views/pages/okjetpes/index.html', // => dist/okjetpes.html
        'grand_prix_burabay/index': 'src/views/pages/grand_prix_burabay/index.html', // => dist/grand_prix_burabay.html
        'news/index': 'src/views/pages/news/index.html', // => dist/news.html
        'news-id/index': 'src/views/pages/news-id/index.html', // => dist/news-id.html
        'news-2/index': 'src/views/pages/news-2/index.html', // => dist/news-2.html
        'amg/index': 'src/views/pages/amg/index.html', // => dist/amg.html
        'kamt/index': 'src/views/pages/kamt/index.html', // => dist/kamt.html
        'check-up/index': 'src/views/pages/check-up/index.html', // => dist/kamt.html
        'sanatories/index': 'src/views/pages/sanatories/index.html', // => dist/sanatories.html
        'placement/index': 'src/views/pages/placement/index.html', // => dist/placement.html
        'error-404/index': 'src/views/pages/error-404/index.html', // => dist/error-404.html

        'clinics/index': 'src/views/pages/clinics/index.html', // => dist/clinics.html
        'clinics/clinic': 'src/views/pages/clinics/clinic/index.html', // => dist/clinics/clinic.html
        'clinics/umit': 'src/views/pages/clinics/umit/index.html', // => dist/clinics/umit.html
        'clinics/children-reabilitation': 'src/views/pages/clinics/children-reabilitation/index.html', // => dist/clinics/children-reabilitation.html
        'clinics/maternal': 'src/views/pages/clinics/maternal/index.html', // => dist/clinics/maternal.html
        'clinics/diagnostic': 'src/views/pages/clinics/diagnostic/index.html', // => dist/clinics/diagnostic.html
        'clinics/neurosurgery': 'src/views/pages/clinics/neurosurgery/index.html', // => dist/clinics/neurosurgery.html
        'clinics/president': 'src/views/pages/clinics/president/index.html', // => dist/clinics/president.html
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
