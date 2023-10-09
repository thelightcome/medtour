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
        index: 'src/views/pages/home.html', // => dist/index.html
        'whyus/index': 'src/views/pages/whyus.html', // => dist/whyus.html
        'visa/index': 'src/views/pages/visa.html', // => dist/visa.html
        'kamt/index': 'src/views/pages/kamt.html', // => dist/kamt.html
        'foreign/index': 'src/views/pages/foreign.html', // => dist/foreign.html
        'amg/index': 'src/views/pages/amg.html', // => dist/amg.html

        'check-up/index': 'src/views/pages/check-up/index.html', // => dist/check-up.html
        'check-up/check-up-list/index': 'src/views/pages/check-up/check-up-list.html', // => dist/check-up/check-up-list.html

        'sanatories/index': 'src/views/pages/sanatories/index.html', // => dist/sanatories/index.html
        'sanatories/sanatory/index': 'src/views/pages/sanatories/sanatory.html', // => dist/sanatories/sanatory.html
        'sanatories/okjetpes/index': 'src/views/pages/sanatories/okjetpes.html', // => dist/sanatories/okjetpes.html
        'sanatories/grand_prix_burabay/index': 'src/views/pages/sanatories/grand_prix_burabay.html', // => dist/sanatories/grand_prix_burabay.html
        'sanatories/sanatory-table/index': 'src/views/pages/sanatories/sanatory-table.html', // => dist/sanatories/sanatory-table.html

        'news/index': 'src/views/pages/news/index.html', // => dist/news/index.html
        'news/news-id/index': 'src/views/pages/news/news-id.html', // => dist/news/news-id.html
        'news/news-10-04/index': 'src/views/pages/news/news-10-04.html', // => dist/news/news-10-04.html
        'news/news-07-04-1/index': 'src/views/pages/news/news-07-04-1.html', // => dist/news/news-07-04-1.html
        'news/news-07-04-2/index': 'src/views/pages/news/news-07-04-2.html', // => dist/news/news-07-04-2.html
        'news/news-07-04-3/index': 'src/views/pages/news/news-07-04-3.html', // => dist/news/news-07-04-3.html
        'news/news-07-04-4/index': 'src/views/pages/news/news-07-04-4.html', // => dist/news/news-07-04-4.html
        'news/news-07-04-5/index': 'src/views/pages/news/news-07-04-5.html', // => dist/news/news-07-04-5.html

        'info/index': 'src/views/pages/info/index.html', // => dist/info/index.html
        'info/placement/index': 'src/views/pages/info/placement.html', // => dist/info/placement.html

        'clinics/index': 'src/views/pages/clinics/index.html', // => dist/clinics/index.html
        'clinics/clinic/index': 'src/views/pages/clinics/clinic.html', // => dist/clinics/clinic.html
        'clinics/umit/index': 'src/views/pages/clinics/umit.html', // => dist/clinics/umit.html
        'clinics/children-reabilitation/index': 'src/views/pages/clinics/children-reabilitation.html', // => dist/clinics/children-reabilitation.html
        'clinics/maternal/index': 'src/views/pages/clinics/maternal.html', // => dist/clinics/maternal.html
        'clinics/diagnostic/index': 'src/views/pages/clinics/diagnostic.html', // => dist/clinics/diagnostic.html
        'clinics/neurosurgery/index': 'src/views/pages/clinics/neurosurgery.html', // => dist/clinics/neurosurgery.html
        'clinics/president/index': 'src/views/pages/clinics/president.html', // => dist/clinics/president.html
        'clinics/nroc/index': 'src/views/pages/clinics/nroc.html', // => dist/clinics/nroc.html
        'clinics/stomatology/index': 'src/views/pages/clinics/stomatology.html', // => dist/clinics/stomatology.html
        
        'error-404': 'src/views/pages/error-404.html', // => dist/error-404.html
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
      rewrites: [
        { from: /^\/$/, to: `index.html` },
        { from: /./, to: `/error-404.html` },
      ],
    },
  },
};
