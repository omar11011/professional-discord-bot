const Item = require('../base')
const categories = require('../../itemCategories')

class Ball extends Item {
    constructor(props) {
        super(props)

        this.category = categories.find(e => e.name == 'ball')
        this.rate = props.rate || 1
    }
}

module.exports = Ball