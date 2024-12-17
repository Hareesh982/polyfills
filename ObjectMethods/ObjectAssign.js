

Object.assign = null
if(!Object.assign){
    Object.assign = function(obj,target){
        if(Object.keys(obj).length === 0){
            let temp_obj = {}
            for(let key in target){
                temp_obj[key] = target[key]
            }
            return temp_obj
        }
        else{
            for(let key in target){
                obj[key] = target[key]
            }
        }
    }
}

let obj = {
    "name" : "hareesh",
    "age" : 24,
    "city" : 'bangalore'
}
let new_obj = Object.assign({},obj)
console.log(new_obj);   // { name: 'hareesh', age: 24, city: 'bangalore' }
Object.assign(new_obj,{"year":2022})

console.log(obj);  // { name: 'hareesh', age: 24, city: 'bangalore' }

console.log(new_obj); // { name: 'hareesh', age: 24, city: 'bangalore', year: 2022 }

