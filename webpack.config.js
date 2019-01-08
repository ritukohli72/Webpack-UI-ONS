const path = require('path'); 
module.exports = 
{
    entry:'./src/index.js',
    output: {
        path:__dirname,
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules: [{
           
            test:/\.js$/,
            exclude: /node_modules/
        },
        {
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }
        ]
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public')
    }
}








