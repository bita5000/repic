const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // 개발 모드 / 배포 모드 중 선택 가능 속성을 추가하여 자체적으로 코드를 최적화하고 용량을 줄임
    mode: "development",
    // js 모듈을 빌드할 때 시작점(기준)이 되는 파일
    entry: "./src/index.js",
    // 빌드 시 생기는 dist 파일
    output: {
        path: path.resolve("./dist"),
        filename: "[name].min.js",
        publicPath: "/"
    },
    // 파일 변경이 감지되었을 때 페이지를 다시 로드하고 새로고침
    devServer: {
        liveReload: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // style-loader와 MiniCssExtractPlugin을 혼용하지 말 것
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            // publicPath: "../dist",
                            name: "images/[name].[ext]?[hash]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: `style.css` })
    ]
};
