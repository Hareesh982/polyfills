let arr = [1,2,3,4,5]

Array.prototype.map = null
if(!Array.prototype.map){
    Array.prototype.map = function(callback){
        let temp = []
        let res
        for(let i of this){
            res = callback(i)
            temp.push(res)
        }
        return temp
    }
}

let out = arr.map((num) => num*2)
console.log(out)