let str = "hareesh"
String.prototype.repeat = null
if(!String.prototype.repeat){
    String.prototype.repeat = function(count){
        let temp = ""
        count = Math.floor(count)
        for(let i=0;i<count;i++){
            temp = this + temp
        }
        return temp
    }
}
console.log(str.repeat(4)); //hareeshhareeshhareeshhareesh
console.log(str.repeat(0)); // 

