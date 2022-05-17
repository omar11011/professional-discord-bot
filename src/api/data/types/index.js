const data = require('./data')
const attributes = Object.keys(data)

const i18n = require('../../../translate')('dict/types')
const idioms = i18n.locales

for (let i = 0; i < attributes.length; i++) {
    data[attributes[i]].idioms = {}

    for (let j = 0; j < idioms.length; j++) data[attributes[i]].idioms[idioms[j]] = i18n.res(attributes[i], idioms[j])
}

module.exports = data