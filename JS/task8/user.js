import compareObj from './stringCompare.js'
export default function (obj1,obj2){
    let a = compareObj(obj1.name, obj2.name)
    if (a === obj1.name){
        return obj1
    } else return obj2
}