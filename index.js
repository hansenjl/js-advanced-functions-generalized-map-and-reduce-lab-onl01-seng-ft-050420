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
  arr.forEach((el)=>{
    total = cb(total,el) 
  })
  return total
}