const crystal = require('../items/crystal')
const types = require('../types')

class MoveZ {
    constructor(props) {
        this.uuid = props.uuid
        this.name = props.name
        this.crystal = crystal.find(e => e.name == (props.crystal || "normastal"))
        this.type = types.find(e => e.name == (props.type || "normal"))
    }
}

module.exports = MoveZ