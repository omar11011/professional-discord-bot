const transformWord = require('./transformWord')

function searchTranslateWord(translator, word, key = null) {
    let result = null

    for (let i = 0; i < translator.locales.length; i++) {
        let json = JSON.parse(JSON.stringify(translator.getAll(translator.locales[i])))
        
        if (key) {
            let keys = key.split(".")

            for(let j = 0; j < keys.length; j++) {
                if (json[keys[j]] && typeof json[keys[j]] == 'object') {
                    json = json[keys[j]]
                    break
                }
            }
        }

        const keys = Object.keys(json)
        
        for (let j = 0; j < keys.length; j++) {
            if (transformWord(word) == transformWord(keys[j]) || transformWord(json[keys[j]]) == transformWord(word)) {
                result = keys[j]
                break
            }
        }

        if(result) break
    }

    return result

}

module.exports = searchTranslateWord