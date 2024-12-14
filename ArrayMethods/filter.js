let arr = [1,2,3,4,5,6,7,8,9]

Array.prototype.filter = null
if(!Array.prototype.filter){
    Array.prototype.filter = function(callback){
        let temp = []
        let res
        for(let i of this){
            res = callback(i)
            if(res == true){
                temp.push(i)
            }
        }
        return temp
    }
}
let out = arr.filter((num) => num%2 == 0)
console.log(out)