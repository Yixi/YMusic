const {
    FuseBox,
    HTMLPlugin,
    WebIndexPlugin,
    CSSPlugin,
    ImageBase64Plugin,
    PostCSS,
    CopyPlugin
} = require('fuse-box');
const precss = require('precss');

const fuseBox = FuseBox.init({
    homeDir: './src/',
    output: './dist/$name.js',
    sourceMaps: true,
    plugins: [
        [PostCSS({plugins: [precss]}), CSSPlugin()],
        CopyPlugin({ useDefault : false, files: ['.mp3'] }),
        ImageBase64Plugin(),
        HTMLPlugin({useDefault:false}),
        WebIndexPlugin({template: './src/index.html'})
    ]
});

fuseBox.dev();

fuseBox.bundle("app.js")
    .watch().hmr()
    .instructions(">index.tsx");

fuseBox.run();