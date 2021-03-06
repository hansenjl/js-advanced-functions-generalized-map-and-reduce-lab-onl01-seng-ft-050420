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
    for(let i=0; i < arr.length; i++){
      total = cb(total,arr[i]) 
    }
  }else{
    for(let i=1; i < arr.length; i++){
      total = cb(total,arr[i]) 
    }
  }
  
  
  return total
}