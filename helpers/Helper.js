export default function ConcatenateItemsOfArray(array, item1, item2) {
    console.log(array)
    console.log(Reflect.get(array,item1))
    console.log(Reflect.get(Reflect.get(array,item1)[0],item2))
    // if (!array) return
    array.map( (element,index) => {
        let result = <p key={index}>{element.item}, </p>
        if (index == array.length - 1) result = <p key={index}>{element.item} </p>
        return result
        // return result

    })
}
