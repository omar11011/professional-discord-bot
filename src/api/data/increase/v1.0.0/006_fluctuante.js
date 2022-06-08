const Increase = require('../base')

module.exports = new Increase({
    uuid: 6,
    name: "fluctuante",
    needExp: level => {
        let result = 0

        if(level <= 15) result = Math.pow(level, 3) * (24 + ((level + 1) / 3)) / 50
        else if(level > 15 && level <= 35) result = Math.pow(level, 3) *(14 + level) / 50
        else result = Math.pow(level, 3) * (32 + (level / 2)) / 50

        return Math.round(result)
    }
})