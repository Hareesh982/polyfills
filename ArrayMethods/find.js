let arr = [1,2,3,4,2,3,4,5]

Array.prototype.find = null
if(!Array.prototype.find){
    Array.prototype.find = function(callback){
        let res
        for(let i of this){
            res = callback(i)
            if(res == true){
                return i
            }
        }
    }
}
let out = arr.find((num) => num%4==0)
console.log(out) // 4