class Category {
    constructor(props) {
        this.uuid = props.uuid
        this.name = props.name

        this.probShiny = props.probShiny || 0
    }
}

module.exports = Category