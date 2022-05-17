const { join } = require('path')

function setTranslator(file) {
    const Translator = require('./class')
    const translator = new Translator()

    translator.configure({
        locales: ['es', 'en'],
        defaultLocale: 'es',
        directory: join(__dirname, 'locales', file),
    })

    return translator
}

module.exports = setTranslator