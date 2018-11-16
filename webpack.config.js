const MODE = process.env.NODE_ENV || "development"
const IS_DEV = MODE === "development"

module.exports = {
  mode: MODE,
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    // entryのキーがnameとなる
    filename: "[name].js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: [
      ".ts", ".tsx", ".js", ".scss", ".scss", ".json",
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
      },
    ]
  }
}
