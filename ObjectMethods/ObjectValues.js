let marks = {
    john : 24,
    mark : 25,
    joey : 30,
    ross : 50
}

Object.values = null
if(!Object.values){
    Object.values = function(obj){
        temp = []
        for(let key in obj){
            temp.push(obj[key])
        }
        return temp
    }
}
console.log(Object.values(marks)); // [ 24, 25, 30, 50 ]



