// Add your functions here
function map(cb,arr){
  let newArr = []
  arr.forEach( (el) => {
    newArr.push(cb(el))
  })
  return newArr
}

function reduce(cb,arr, init=0){
  let total = init 
  arr.forEach((el)=>{
    total += cb(el) 
  })
  return total
}