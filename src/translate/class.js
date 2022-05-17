const { join } = require('path')
const { lstatSync } = require('fs')

class Translator {

    constructor() {
        this.locales = ['es', 'en']
        this.defaultLocale = require('../app/config').lang
        this.directory = null
    }

    configure(props) {
        if(props.locales && Array.isArray(props.locales) && props.locales.length > 0) {
            const newLocales = []
            for(let i = 0; i < props.locales.length; i++) {
                props.locales[i] = String(props.locales[i])
                if(!newLocales.includes(props.locales[i])) newLocales.push(props.locales[i].toLowerCase())
            }
            if(newLocales.length > 0) this.locales = newLocales
        }
        
        if(props.defaultLocale) this.defaultLocale = String(props.defaultLocale).toLowerCase()

        if(props.directory) {
            props.directory = String(props.directory)
            if(lstatSync(props.directory).isDirectory()) this.directory = props.directory
        }
    }

    res(key, lang = this.defaultLocale, props = {  }) {
        if(!key) return console.error('Necesitas especificar una llave.')

        if(!this.directory) return console.error('No se ha establecido ningún directorio.')

        if(!this.locales.includes(this.defaultLocale)) return console.error('El lenguaje actual no fue establecido entre los lenguajes disponibles.')

        let file, msg
        
        try {
            file = require(join(this.directory, String(lang)))
        } catch {
            return console.error('Este archivo no existe.')
        }

        key = String(key)

        let keys = key.split('.')
        let obj = JSON.parse(JSON.stringify(file))
        
        for(let i = 0; i < keys.length; i++) {
            if(obj[keys[i]]) {
                if(i + 1 == keys.length) {
                    msg = String(obj[keys[i]])
                    break
                }
                else obj = obj[keys[i]]
            }
        }
        
        if(msg == undefined) return console.error('Claves incorrectas.')

        if(props && typeof props == 'object' && Object.keys(props).length > 0) {
            const currentProps = Object.keys(props)
            
            for(let i = 0; i < currentProps.length; i++) {
                if(msg.includes('${' + currentProps[i] + '}')) msg = msg.replace('${' + currentProps[i] + '}', String(props[currentProps[i]]))
            }
        }
        
        return msg
    }

    getAll(lang = this.defaultLocale) {
        if(!this.locales.includes(String(lang))) lang = this.defaultLocale

        try {
            const file = require(join(this.directory, String(lang)))
            return file
        } catch {
            return console.error('Este archivo no existe.')
        }
    }

}

module.exports = Translator