const Item = require('../base')

class Crystal extends Item {
    constructor(props) {
        super(props)

        this.category = "crystal"
    }
}

module.exports = Crystal