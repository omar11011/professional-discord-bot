class Item {
    constructor(props) {
        this.uuid = props.uuid
        this.name = props.name
        this.pruchasePrice = props.pruchasePrice || null
        this.salePrice = props.salePrice || null
    }
}

module.exports = Item