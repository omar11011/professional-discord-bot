const Item = require('../base')

class Ring extends Item {
    constructor(props) {
        super(props)

        this.category = 'Ring'
    }
}

module.exports = Ring