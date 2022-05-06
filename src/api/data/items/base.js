class Item {
    constructor(props) {
        this.code = props.code
        this.name = props.name
        this.available = props.available || true
        this.onSale = props.onSale || true
        this.price = props.price
        this.discount = props.discount || 0
    }
}

module.exports = Item