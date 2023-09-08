function capitalize(str) {
    let firstLet = str[0]
    firstLet = firstLet.toUpperCase()
    return (firstLet + str.slice(1))
}
 
// console.log(capitalize('hello'));

module.exports= capitalize