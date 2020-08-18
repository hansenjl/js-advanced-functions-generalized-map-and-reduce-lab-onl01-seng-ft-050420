// Add your functions here
function map(arr, cb){
  let newArr = []
  arr.forEach( (el) => {
    newArr.push(cb(el))
  })
  return newArr
}

function reduce(arr, cb, init){
  let total = arr[0]
  if(init){
    total = init 
  }else{
    for(let i=0; i < arr.length; i++){
    total = cb(total,arr[i]) 
    console.log(total)
    console.log(arr[i])
  }
  }
  
  
  return total
}