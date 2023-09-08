function capitalize(str = 'No argument passed in') {
    return str
    let firstLet = str[0]
    firstLet = firstLet.toUpperCase()
    return (firstLet + str.slice(1))
}
 
console.log(capitalize());

module.exports= capitalize