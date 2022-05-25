class Item {
    constructor(props) {
        this.uuid = props.uuid
        this.name = props.name
        this.purchasePrice = props.purchasePrice || null
        this.salePrice = props.salePrice || null
    }
}

module.exports = Item