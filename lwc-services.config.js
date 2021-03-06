// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/master/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    resources: [
        { from: 'src/resources', to: 'dist/resources/' },
        { from: 'src/index.html', to: 'dist/' },
        { from: 'src/manifest.json', to: 'dist/' },
        // {
        //     from: 'node_modules/jquery/dist/jquery.min.js',
        //     to: 'src/bootstrap/js'
        // },
        // {
        //     from: 'node_modules/jquery/dist/jquery.min.js',
        //     to: 'dist/bootstrap/js'
        // },
        { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'src/bootstrap/css' },
        { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'dist/bootstrap/css' },
        // { from: 'node_modules/bootstrap/dist/js', to: 'src/bootstrap/js' },
        // { from: 'node_modules/bootstrap/dist/js', to: 'dist/bootstrap/js' }
    ]
};
