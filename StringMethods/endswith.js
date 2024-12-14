let str = 'hareesh'
String.prototype.endsWith = null
if(!String.prototype.endsWith){
    String.prototype.endsWith = function(word){
        if(word === ""){
            return true
        }
        let n = word.length
        if(word === this.slice(-n,)){
            return true
        }
        return false
}
}
console.log(str.endsWith('eesh')) // true
console.log(str.endsWith('sh')) // true
console.log(str.endsWith('ees')) // false
console.log(str.endsWith('')); // true


