// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");

module.exports = {
  entry: [path.resolve(__dirname, "./src/index.tsx")],
  output: {
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/public/",
    filename: "[name].js",
    clean: true,
  },
  devServer: {
    open: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    client: {
      webSocketURL: {
        hostname: "127.0.0.1",
        pathname: "/ws",
        protocol: "ws",
      },
    },
    port: 9090,
    // headers: {
    //   "Access-Control-Allow-Origin": "https://localhost:1414",
    //   "Access-Control-Allow-Headers":
    //     "Origin, X-Requested-With, Content-Type, Accept",
    // },
  },
  devtool: "cheap-module-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader", options: { transpileOnly: true } }],
      },

      // addition - add source-map support
      {
        enforce: "pre",
        test: /\.js$/,
        use: ["source-map-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(scss)$/i,
        use: [
          {
            // inject CSS to page
            loader: "style-loader",
          },
          {
            // translates CSS into CommonJS modules
            loader: "css-loader",
          },
          {
            // Run postcss actions
            loader: "postcss-loader",
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                // plugins: function () {
                //   return [require("autoprefixer")];
                // },
                plugins: ["autoprefixer"],
              },
            },
          },
          {
            // compiles Sass to CSS
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       outputPath: "imgs",
        //       name: "[name].[ext]",
        //     },
        //   },
        //   {
        //     loader: "image-webpack-loader",
        //     options: {
        //       bypassOnDebug: true,
        //       disable: true,
        //     },
        //   },
        // ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        // type: "asset/resource",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts", // where the fonts will go
              // publicPath: '/buildframework/Fonts/',
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/index.html",
    }),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
  ],
};
