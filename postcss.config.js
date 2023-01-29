const autoprefixer = require('autoprefixer'); // плагин, который учит PostCSS добавлять вендорные префиксы
const cssnano = require('cssnano'); // плагин для минификации css-кода

module.exports = {
    plugins: [
        autoprefixer,
        cssnano({ preset: 'default' })
    ]
}