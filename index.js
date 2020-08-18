// Add your functions here
function map(arr, cb){
  let newArr = []
  arr.forEach( (el) => {
    newArr.push(cb(el))
  })
  return newArr
}

function reduce(arr, cb, init=0){
  let total = init 
  for(let i=0; i < arr.length; i++){
    return total = cb(total,arr[i]) 
  }
  return total
}