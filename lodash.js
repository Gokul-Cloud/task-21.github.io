//1) Chunk
console.log('chunk function')
function Chunk(arr, val)
{
    let fin_array = [];

    for(let i=0; i<arr.length; i+=val)
    {
        fin_array.push(arr.slice(i, val + i));
    }
    return fin_array;
}
console.log(Chunk([1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 1], 3));

//2). sum
console.log('sum function')
function sum(arr)
{
    let final_array = 0;
    
    for(i=0; i<arr.length; i++)
    {
        final_array += arr[i];
    }
    return final_array;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 1]));

//3). filter
console.log('filter function')
Array.prototype.mfilter =  function (fun) {
    var filtered = [];
    for(let i = 0; i < this.length; i++) {
      if (fun(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
  };
  
  var returnedArr = [1,2,3,4,5,6].mfilter(function(element, index, arr) {
    return element > 5;
  });
  
  console.log(returnedArr);
  
  //4). reduce
  console.log('reduce function')

  const numbers = [1,2,3]

  const sumReducer = (initialValue, current) => initialValue + current;

  const reduce = (reducer, initialValue, array) => {
    let value = initialValue;

    for(let i = 0; i < array.length; i++) {
      let currentValue = array[i]
      value = reducer(value, currentValue)
    }

    return value;
  }

  const sumOfNumbersCustom = reduce(sumReducer, 0, numbers)

  console.log("Custom reduce function, " + sumOfNumbersCustom);

  //5). find
console.log('find function');
  const studentDetails=
[
   {
      studentId:101,
      studentName:"John"
   },
   {
      studentId:102,
      studentName:"David"
   },
   {
      studentId:103,
      studentName:"Carol"
   }
]
function findByName(name){
   var flag=true;
   for(var i=0;i<studentDetails.length;i++){
      if(studentDetails[i].studentName==name){
         flag=true;
         break
      } else{
         flag=false;
      }
   }
   if(flag==true){
      console.log("The name found="+name);
   } else{
      console.log("The name not found="+name);
   }
}
findByName("David");
findByName("gokul");