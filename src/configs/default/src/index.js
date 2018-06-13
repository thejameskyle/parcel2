// @flow
export default {
  resolver: '@parcel/resolver-default',
  strategy: '@parcel/strategy-default',
  transforms: {
    '*.{js,mjs,jsm,babel,jsx,es6}': ['@parcel/transform-babel'],
    '*.{ml,re}': ['@parcel/transform-reason'],
    '*.{ts,tsx}': ['@parcel/transform-typescript'],
    '*.coffee': ['@parcel/transform-coffeescript'],
    '*.json5': ['@parcel/transform-json5'],
    '*.json': ['@parcel/transform-json'],
    '*.{yaml,yml}': ['@parcel/transform-yaml'],
    '*.toml': ['@parcel/transform-toml'],
    '*.{gql,graphql}': ['@parcel/transform-graphql'],
    '*.{css,pcss}': ['@parcel/transform-css'],
    '*.styl': ['@parcel/transform-stylus'],
    '*.less': ['@parcel/transform-less'],
    '*.{sass,scss}': ['@parcel/transform-sass'],
    '*.{html,htm}': ['@parcel/transform-html'],
    '*.rs': ['@parcel/transform-rust'],
    '*.vue': ['@parcel/transform-vue'],
    '*.wasm': ['@parcel/transform-wasm'],
    '*.webmanifest': ['@parcel/transform-webmanifest'],
    '*.{png,jpeg,jpg,svg,gif,webp,tiff,bmp,ico}': ['@parcel/transform-image'],
    '*.{ttf,otf,woff,woff2,svg,eot}': ['@parcel/transform-font'],
  },
  packagers: {
    '*.js': '@parcel/packager-js',
    '*.css': '@parcel/packager-css',
    '*.html': '@parcel/packager-html',
    '*.wasm': '@parcel/packager-wasm',
    '*': '@parcel/packager-raw',
  },
  optimizer: {
    '*.js': ['@parcel/optimizer-uglify'],
    '*.css': ['@parcel/optimizer-cssnano'],
    '*.html': ['@parcel/optimizer-htmlnano'],
    '*.{png,jpg,jpeg,svg,gif,webp,tiff,pdf,bmp}': [
      '@parcel/optimizer-imagemin',
    ],
  },
  loaders: {
    '*.js': ['@parcel/loader-js'],
    '*.wasm': ['@parcel/loader-wasm'],
    '*.css': ['@parcel/loader-css'],
  },
};
