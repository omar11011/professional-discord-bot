const Item = require('../base')

class Television extends Item {
    constructor(props) {
        super(props)

        this.category = 'Television'
    }
}

module.exports = Television