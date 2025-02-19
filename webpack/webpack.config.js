const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main : './src/main.js',
    // sub : './src/sub.js',
    // entrypointtest : './src/entrypointtest.js'
  },
  // './src/main.js', // 진입점
  output: {
    // 기본값으로 설정되는 옵션값
    // path : path.resolve(__dirname, 'dist')
    // clean:true 결과물 삭제
    clean:true
  }, // 출력
  // module: { // 로더(모듈)
  //   // webpack이 css나 혹은 이미지 파일같은 
  //   // 웹팩이 읽을 수 없는 내용들을 처리하도록 설정
  //   rules: []
  // },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // 순서 중요!
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        use: 'swc-loader'
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp)$/i, // i 옵션 - 대소문자 구분 없음
        type: 'asset/resource' // type을 통해 Webpack에 내장된 로더(Builtin Loader) 명시
      }
    ]
  },
  // plugins: [], // 플러그인
  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: 'static',
          globOptions:{
            dot:true,
            gitignore:true
          }
        }
      ]
    })
  ]
  // 기타 옵션...
}