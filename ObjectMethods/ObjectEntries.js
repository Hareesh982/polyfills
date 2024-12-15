let obj = {
    1:2,
    2:3,
    3:4
}
Object.entries = null
if(!Object.entries){
    Object.entries = function(object){
        temp = []
        for(let key in object){
            temp.push([key,object[key]])
        }
        return temp
    }
}
console.log(Object.entries(obj));
