function change(letter) {

    if(letter === 'á') letter = 'a'
    else if(letter === 'é') letter = 'e'
    else if(letter === 'í') letter = 'i'
    else if(letter === 'ó') letter = 'o'
    else if(letter === 'ú') letter = 'u'
    else if(letter === 'ñ') letter = 'n'
    else if(letter === '%') letter = ''
    else if(letter === '-') letter = ' '

    return letter

}

module.exports = content => {
    let result = ''
    content = content.toLowerCase()

    for(let i = 0; i < content.length; i++) result += change(content[i])
    
    result = result.split(' ').join('_')
    
    return result
}