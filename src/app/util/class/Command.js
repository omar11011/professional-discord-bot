class Command {

    constructor(props) {

        this.name = props.name || undefined
        this.alias = props.alias || []
        this.description = props.description || 'Sin descripción'

        this.cooldown = props.cooldown || 3
        this.args = props.args || false

        this.enabled = props.enabled || true
        this.ownerOnly = props.ownerOnly || false
        this.guildOnly = props.guildOnly || true

        this.permissions = {
            user: props.permissions ? props.permissions.user : [],
            bot: props.permissions ? props.permissions.bot : ['SEND_MESSAGES'],
        }

        this.run = props.run || function() {
            return console.log('Error')
        }

    }

}

module.exports = Command