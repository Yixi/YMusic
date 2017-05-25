const {FuseBox, HTMLPlugin, WebIndexPlugin} = require('fuse-box');

const fuseBox = FuseBox.init({
    homeDir: './src/',
    output: './dist/$name.js',
    sourceMaps: true,
    plugins: [
        HTMLPlugin({useDefault:false}),
        WebIndexPlugin({template: './src/index.html'})
    ]
});

fuseBox.dev();

fuseBox.bundle("app.js")
    .watch().hmr()
    .instructions(">index.tsx");

fuseBox.run();