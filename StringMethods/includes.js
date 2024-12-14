let str = "hareesh"

String.prototype.includes = null

if(!String.prototype.includes){
    String.prototype.includes = function(myName){
        for(let i=0;i<this.length;i++){
            if(myName === this.slice(i,i+myName.length)){
                return true
            }
        }
    return false
    }
}

console.log(str.includes('e')) // true
console.log(str.includes('ees')) // true
console.log(str.includes('haresh')) // false


