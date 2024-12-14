// reduce

let arr = [1,2,3,4,5,6]
Array.prototype.reduce = null
if(!Array.prototype.reduce){
    Array.prototype.reduce = function(callback){
        let res = 0
        let out = 0
        for(let i of this){
            out = out + callback(res,i)
        }
        return out
    }
}
console.log(arr.reduce((acc,ele) => acc+ele));

