const Item = require('../base')
const categories = require('../../itemCategories')

class Crystal extends Item {
    constructor(props) {
        super(props)

        this.category = categories.find(e => e.name == 'crystal')
    }
}

module.exports = Crystal