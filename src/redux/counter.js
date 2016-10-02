// this passes with useing deepfreeze because this pattern does not mutate the array where as list.push does
const addCounter = (list) => {
 return [...list, 0]
}
 // 
const removeCounter = (list, index) => {
 return list.slice( 0, index)
 .concat(list.slice(index + 1))
}

 export  {addCounter, removeCounter}