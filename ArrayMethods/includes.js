let arr = [1,2,3,4,5]

Array.prototype.includes = null

if(!Array.prototype.includes){
    Array.prototype.includes = function(num){
        for(let i of this){
            if(i == num){
                return true
            }
        }
        return false
    }
}

console.log(arr.includes(10)) // false
console.log(arr.includes(1)) // true