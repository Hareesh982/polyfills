let str = 'hareesh'
String.prototype.startsWith = null
if(!String.prototype.startsWith){
    String.prototype.startsWith = function(word){
        if(word === ""){
            return true
        }
        let n = word.length
        if(word === this.slice(0,n)){
            return true
        }
        return false
}
}
console.log(str.startsWith('har')) // true
console.log(str.startsWith('h')) // true
console.log(str.startsWith('ar')) // false
console.log(str.startsWith('')); // true