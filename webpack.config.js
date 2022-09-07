/* eslint-disable no-undef */
// const { port } = require("./client.config.json");

const fs = require("fs");
const path = require("path");

const CssWebpackPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const port = 3000;
module.exports = (_, args) => {
  const isDev = args.mode === "development";
  const getFilename = (ext) => `[name].${isDev ? "" : "[contenthash]."}${ext}`;
  const SRC_DIR = path.resolve(__dirname, "src");
  return {
    context: SRC_DIR,
    // context: __dirname + '/src',
    entry: ["@babel/polyfill", "./index.js"],
    output: {
      filename: getFilename("js"),
      path: path.resolve(__dirname, "..", "build"),
      assetModuleFilename: `${isDev ? "[name]" : "[contenthash]"}[ext][query]`,
      publicPath: "/",
      clean: true,
    },
    resolve: {
      extensions: [".js", ".json"],
      alias: {
        // "@": path.resolve(__dirname, "..", "src"),
        // "@reducer": path.resolve(__dirname, "..", "src", "common", "reducer"),
        // "@hook": path.resolve(__dirname, "..", "src", "hook"),
        // "@context": path.resolve(__dirname, "..", "src", "context"),
        // "@component": path.resolve(__dirname, "..", "src", "component"),
        // "@page": path.resolve(__dirname, "..", "src", "page"),
        // "@image": path.resolve(__dirname, "..", "src", "assets", "image"),
        // "@icon": path.resolve(__dirname, "..", "src", "assets", "icon"),
        // "@video": path.resolve(__dirname, "..", "src", "assets", "video"),
      },
    },

    plugins: [
      new (require("eslint-webpack-plugin"))(),
      new (require("html-webpack-plugin"))({
        template: "../public/index.html",
        minify: { collapseWhitespace: !isDev },
      }),
      new CssWebpackPlugin({
        filename: getFilename("css"),
      }),
      new (require("copy-webpack-plugin"))({
        patterns: [
          {
            from: "../public/logo192.png",
            to: "../build",
          },
        ],
      }),
      new NodePolyfillPlugin({
        excludeAliases: ["console"],
      }),
    ],
    devtool: isDev ? "source-map" : false,
    devServer: {
      historyApiFallback: true,
      allowedHosts: "all",
      port,
      hot: true,
      https: isDev ? false : {},
      // isDev && port === 3002
      //   ? {
      //       cert: fs.readFileSync(".cert/cert.cer"),
      //       key: fs.readFileSync(".cert/key.pem"),
      //       //   ca: fs.readFileSync(".cert/chain.pem"),
      //     }
      //   : {},
    },
    optimization: (() => {
      const config = {
        splitChunks: { chunks: "all" },
      };

      if (!isDev) config.minimize = true;

      return config;
    })(),

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            // presets: ["@babel/preset-env", "@babel/preset-react"],
            // plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },

        {
          test: /\.(scss)$/,
          use: [
            CssWebpackPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    "postcss-preset-env",
                    "postcss-flexbugs-fixes",
                    "autoprefixer",
                  ],
                },
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          type: "asset/resource",
        },
        {
          test: /\.mp4$/,
          loader: "file-loader",
          options: { name: getFilename("mp4") },
        },
        {
          test: /\.svg$/,
          loader: "@svgr/webpack",
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, "src"),
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        // {
        //   test: /\.css$/,
        //   include: SRC_DIR,
        //   use: [
        //     { loader: "style-loader" },
        //     {
        //       loader: "css-loader",
        //       options: {},
        //     },
        //   ],
        // },
      ],
    },
  };
};
