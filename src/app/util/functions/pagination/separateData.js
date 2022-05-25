module.exports = (data, number) => {
    const newData = []
    const pages = Math.ceil(data.length / number)

    if (pages == 1) return [ data ]

    let start = 0
    let final = number

    for (let i = 0; i < pages; i++) {
        newData.push(data.slice(start, final))
        start = (i + 1) * number
        final = (i + 1) < pages - 1 ? final * (i + 2) : data.length
    }

    return newData
}