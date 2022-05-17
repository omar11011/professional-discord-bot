const Item = require('../base')

class Crystal extends Item {
    constructor(props) {
        super(props)

        this.category = "crystal"
        this.move_z = props.move_z
    }
}

module.exports = Crystal