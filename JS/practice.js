// var age=12;
// var age=20;
// console.log(age)
// console.log(2**6)
// var n=11;
// if(n%2==0){
//     console.log("Even")
// }
// else{
//     console.log("Odd")
// }
// function myFunction(msg,){
//     console.log(msg);
// }
// myFunction("naresh");
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// };
// arrowSum(1,2);
// function incEle(arr){
//     for(var i=0;i<arr.length;i++){
//         arr[i]=arr[i]+1;
//     }
// }
// const arr=[1,2,3];
// console.log(incEle(arr));
let ar=[1,2,3,4];
ar.forEach(function printVal(val){
    console.log(val*val);
})
ar.forEach((num,i,ar)=>{
    console.log(num,i,ar);
});
let temp=ar.map((val)=>{
    return val*val;
})
console.log(temp);
let res=ar.filter((val)=>{
    return val%2==0;
})
console.log(res);
let array=[1,2,3,4,5];
let sum=array.reduce((val,curr)=>{
    return val+curr;
})
console.log("sum is",sum);
let pro=array.reduce((val,curr)=>{
    return val*curr;
})
console.log("product is",pro);