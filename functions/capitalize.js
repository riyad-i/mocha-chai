function capitalize(str) {
    // return str
    if(str == undefined){
        return('No argument passed in')
    }
    if(str.length == 0){
        return str
    }
    str = str.charAt(0).toUpperCase() + str.slice(1)
    return str
}
 
console.log(capitalize());

module.exports= capitalize