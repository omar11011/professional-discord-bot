class Event {

    constructor(props) {

        this.name = props.name || undefined
        this.run = props.run || function() {
            return console.log('Error')
        }

    }

}

module.exports = Event