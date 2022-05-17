const Item = require('../base')

class Ball extends Item {
    constructor(props) {
        super(props)

        this.category = "ball"
        this.rate = props.rate || 1
    }
}

module.exports = Ball