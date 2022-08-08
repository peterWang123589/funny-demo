const path=require('path')
const HtmlWebpackPlugin=require("html-webpack-plugin")

let demo_name='demo1'

module.exports={
  entry:`./src/${demo_name}.js`,
  mode:"development",
  module:{
    rules:[
      {
        test:/\.css$/i,
        use:[ "style-loader" ,"css-loader"]
      },
      {
        test:/\.s[ac]ss$/,
        use:["style-loader" ,"css-loader","sass-loader"]
      }

    ]
  },
  output:{
    path:path.resolve(__dirname,'bundle'),
    filename:"[name].js"
  },
  devServer: {
    hot: true,
    open: true
  },
  plugins:[
    new HtmlWebpackPlugin({template:"./demo/demo1.html",filename:demo_name+".html"})
  ]


}