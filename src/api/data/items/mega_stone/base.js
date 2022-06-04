const Item = require('../base')
const categories = require('../../itemCategories')

module.exports = class MegaStone extends Item {
    constructor(props) {
        super(props)

        this.category = categories.find(e => e.name == 'mega stone')
    }
}