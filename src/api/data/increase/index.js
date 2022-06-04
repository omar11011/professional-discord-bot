const i18n = require('../../../translate')('dict/increase')
const idioms = i18n.locales
const data = require('./data')

for (let i = 0; i < data.length; i++) {
    data[i].idioms = {}
    for (let j = 0; j < idioms.length; j++) data[i].idioms[idioms[j]] = i18n.res(data[i].name, idioms[j])
}

module.exports = data