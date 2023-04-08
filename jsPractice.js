
// let arr=[1,2,3]
// let sum=0;
// arr.forEach(ele=>{
//     sum=sum+(ele*ele)
//     console.log(sum)
// })
// console.log(sum)

// function getSameValue(arr1,arr2){
//     let Commn=arr1.filter(ele => arr2.includes(ele))
//     return Commn
// }
// let arr1=[1,2,3,4]
// let arr2=[2,4,6]
// let result=getSameValue(arr1,arr2)
// console.log(result)

// function getUniqueValue(arr){
//    // return Arrar.from(new Set(arr))
//    let item=[]
//   let unique=arr.filter(ele=>{
//     if(item.includes(ele)){
//         return false
//     }
//     else{
//         return item.push(ele)
//     }
//     return item
//   })
//   return unique
// }

// let arr=[1, 2, 2, 3, 4, 4, 5]
// let result=getUniqueValue(arr)
// console.log(result)

// function getDescendingOrder(arr){
//     return arr.sort((a,b)=> b-a)
// }
// let arr=[3, 7, 1, 5, 2]
// let result=getDescendingOrder(arr)
// console.log(result)

// function getDesiredValue(arr){
//     return arr.filter(ele=> ele.length>5)
// }
// let arr=["apple", "banana", "pear", "orange", "kiwi"]
// let result=getDesiredValue(arr)

// function removeVowels(string){
//     let vowel=['a','e','i','o','u']
//     let arr=string.split('')
//     let tem=arr.filter(ele=> !vowel.includes(ele))
//     console.log(tem.join(''))
//     return tem.join('')

// }
// removeVowels('This is a TEST')

// function removeDuplicates(arr){
//    // return Array.form(new Set(arr))
//    let unique=[]
//    arr.forEach(ele => {
//     if(unique.includes(ele)){
//         return false
//     }else{
//         unique.push(ele)
//     }
//    });
//    return unique
// }
// let result=removeDuplicates([1, 2, 3, 2, 4, 3])
// console.log(result)

// function reverseString(string){
//     return string.split('').reverse().join('')
// }
// let result=reverseString('hello')
// console.log(result)

//   function myFunction(a, n) {
//     console.log(a.split(''))
//     return a.split('')[n-1];
//   }
//   console.log(myFunction('abcd',1))



//   function myFunction(a) {
//     return a.split("").filter((ele, i) => {
//       if (i < 3) {
//         return false;
//       } else {
//         return true;
//       }
//     });
//   }
//   console.log(myFunction('1234'))




// function sumEvenNumbers(arr){
//     let sum=0
//     arr.forEach(element => {
//         if(element % 2 ==0){
//             sum =sum+element
//         }
//     });
//     return sum
// }
// let results=sumEvenNumbers([1, 2, 3, 4, 5, 6])
// console.log(results)




// function sumEvenNumbers(arr){
//   return arr.reduce((sum,num)=>{
//     if(num % 2 == 0){
//         return num + sum
//     }
//     return sum
//   },0)
// }
// let results=sumEvenNumbers([1, 2, 3, 4, 5, 6])
//  console.log(results)




// function countVowels(string){
//     let vowel=['a','e','i','o','u']
//     return (string.split('').filter(ele => vowel.includes(ele))).length
// }
// console.log(countVowels('hello'))


// function reverseWords(string){
//    return string.split(' ').reverse().join(' ')
// }
// let result=reverseWords('hello world')
// console.log(result)

// function mergeArr(arr1,arr2)
// {
//     return [...arr1,...arr2]
// }
// console.log(mergeArr([1,2,3],[4,5]))

// function getMaxNumber(arr){
//     let max=0
//     arr.forEach(ele => {
//         if(ele>max){
//             max=ele
//         }
//     });
//     return max===0 ? undefined:max
// }

// console.log(getMaxNumber([1,6]))



// function getFactorial(int){
//     let val=1
// for(let i=1;i<=int; i++){
//     val=val*i
// }
// return val
// }
// console.log(getFactorial(5))


// function sumConsecutives(arr){
//     // let OddArray=arr.filter(ele=> ele % 2 !==0)
//     // let EvenArray=arr.filter(ele=> ele % 2 ===0)
//     // console.log(OddArray,EvenArray)
//     // return EvenArray.reduce((sum,ele)=> {
//     //     return sum+ele
//     // },0)

//     let PreviousVal=0
//     return arr.map(ele=>{
//         PreviousVal=ele
//         console.log(ele==PreviousVal)
//         if(ele===PreviousVal){
//             ele+PreviousVal
//         }
//     })

// }
// console.log(sumConsecutives([1, 1, 2, 3, 3, 3, 4, 4, 5]))


// function calculateAverage(arr){
//     return (arr.reduce((num,ele)=>{ return num+ele},0)/arr.length)
// }
// console.log(calculateAverage([2, 3, 5, 8, 13]))


// function sequenceCount(arr){
//     let max=0
//     let old_arr=arr
//     let count_arr=[]
//    Array.from(new Set(arr)).forEach(ele=>{
//     old_arr.forEach((elee,i)=>{
//         if(elee==ele){
//             max=max+1
//         }else{
//             count_arr.push(max)
//             max=0
//         }
//     })
//    })
//    console.log(count_arr)

// }
// console.log(sequenceCount([1,2,2,2,2]))



// function uniqueTwoArr(arr1,arr2){
//     let temp=arr1.concat(arr2)
//     return Array.from(new Set(temp)).sort((a,b)=>a-b)
// }
// console.log(uniqueTwoArr([2, 4, 1, 6, 8],[4, 9, 2, 1]))


// function secoundHightNumber(arr){
//     //console.log(arr)
//     let unique=Array.from(new Set(arr))
//     let assOrder=unique.sort((a,b)=>a-b)
//     console.log(assOrder)
//     return assOrder[assOrder.length-2]
// }
// console.log(secoundHightNumber([1,2,3,4,2,8]))



// function sumOfEven(arr){
//     return arr.filter(ele=> ele % 2 ===0).reduce((sum,num)=>{return sum+num},0)
// }
// console.log(sumOfEven([1, 2,2, 6,3, 4, 5, 6]))



// function averageStringLength(arr){
//     let sum=0
//     let split=arr.filter(ele=>{
//         sum=sum+ele.split('').length
//     })
//     console.log(sum)
//     return sum/arr.length
// }
// console.log(averageStringLength(["I", "love", "JavaScript"]))


//     function reverseString(str) {
//   // Your code here
//         return str.split('').reverse().join('')
// }
// console.log(reverseString('hello'))



// function findDuplicates(arr) {
//   // Your code here
//   let dublicate=[]
//   let unique=[]
//   arr.forEach(element => {
//     if(unique.includes(element)){
//         dublicate.push(element)
//         return false
//     }else{
//         unique.push(element)
//     }
//   });
//   return dublicate
// }
// console.log(findDuplicates([1, 2, 3, 2, 4, 3]))




// function fizzBuzz(num) {
//   // Your code here
//   let divisibleByThree=(num % 3 ==0)
//   let divisibleByFive=(num % 5 ==0)
//   if(divisibleByThree && divisibleByFive){
//     return 'FizzBuzz'
//   }
//   else if(divisibleByThree){
//     return 'Fizz'
//   }else if(divisibleByFive){
//     return 'Buzz'
//   }
//   else{
//     return num
//   }
// }
// console.log('hiii')
// console.log(fizzBuzz(7))


// function mostRepeatedChar(str){
// let convertIntoArray=str.split('')
// let count=0
// convertIntoArray.forEach(ele => {
//   if(str.include)
// });
// console.log(convertIntoArray)
// }

// console.log(mostRepeatedChar("hello world"))








// function mostCommonChar(str){
//   strObj={},
//   maxCount=0,
//   maxChar='',
//   maxConsectiveNumCount=0
//   let convertIntoArray=str.split('')
//   convertIntoArray.forEach(ele => {
//     if(!strObj[ele]){
//       strObj[ele]=1
//     }else{
//       strObj[ele]++
//     }
//   });
//   console.log(strObj)
//   for(let key in strObj){
//     if(strObj[key]>maxCount){
//       maxCount=strObj[key]
//       maxChar=key
//      // maxConsectiveNumCount=strObj[key]*key
//     }
//   }
//   return maxChar

// }
// console.log(mostCommonChar('hello world'))







// function secondSmallest(arr) {
//   return Array.from(new Set(arr)).sort((a,b)=>a-b)[1]
// }
// console.log(secondSmallest([1,3,2,2,4,5]))




// function commonElements(arr1, arr2) {
//   let comomonArr=[]
//   arr1.forEach(firstArrEle => {
//     arr2.forEach(secondArrEle=>{
//       if(firstArrEle===secondArrEle){
//         comomonArr.push(firstArrEle)
//       }
//     })
//   });
//   return comomonArr
//   // your code here
// }
// console.log(commonElements([1, 2, 3, 4, 5],[3, 5, 2, 6, 7]))


//improved version

// function logestConsectiveSequence(arr){

//   let unique=new Set(arr)
//   let maxSequence=0
//   for(let item of unique){
//     if(!unique.has(item-1)){
//       let currentLength=1

//       while(unique.has(item+currentLength)){
//         currentLength++
//       }
//       maxSequence=Math.max(maxSequence,currentLength)
//   }
// }
//   return maxSequence
// }
// const result=logestConsectiveSequence([22,33,44,1,2,3,4,5,6,8])
// console.log(result)



// function commonNumner(arr1,arr2){
//    return Array.from(new Set(arr1)).filter(ele=>{
//     return arr2.includes(ele)
//    })
// }
// console.log(commonNumner([2, 4, 4, 2, 6, 1, 7],[4, 7, 4, 4, 4, 9, 2]))





// function stringfreqCount(str){
//   const temp=str.toLowerCase().split(' ')
//   let tempObj={}
//   temp.forEach(element => {
//     if(Object.keys(tempObj).includes(element)){
//       tempObj[element]++
//     }else{
//       tempObj[element]=1
//     }

//   });
//   return tempObj
// }
// console.log(stringfreqCount('The quick brown fox jumps over the lazy dog'))



// function secoundHighestNumber(arr)
// {
//   let maxNum=arr[0]
//   let secondMaxNum=null

//   arr.sort((a,b)=> a-b).forEach((element,index) => {
//     if(maxNum<element){
//       secondMaxNum=maxNum
//       maxNum=Math.max(maxNum,element)
//     }
//   });
//   return secondMaxNum
// }
// console.log(secoundHighestNumber([1,2,9,3,6,4,5]))


// function findLongestWord(str){
//   let maxLength=0
//   str.split(' ').forEach(element => {
//     if(maxLength<element.length){
//       maxLength=element.length
//     }

//   });
// return maxLength

// }
// console.log(findLongestWord('A revolution without dancing is a revolution not worth having.'))


// function reverseString(str){
//   let temp=str.split('').map((element,index) => {
//     return str[(str.length-1)-index]
//   });
//   return temp.join('')
// }
// console.log(reverseString('world'))




// function palindromeChecker(str){
// return str==str.split('').reverse().join('')
// }
// console.log(palindromeChecker('racecar'))



function reverseInGroups(arr, n, k){
  // code here
}




fetch('https://apiv1.vio-v.com/online_players')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
