// Add your functions here
function map(cb,arr){
  let newArr = []
  arr.forEach( (el) => {
    newArr.push(cb(el))
  })
}