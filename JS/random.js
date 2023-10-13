// var n=Math.random();
// console.log(n*100)
// console.log(Math.round(n));
// var ar=["naresh",'suresh']
// console.log(ar.length)
// console.log(ar[2])
// console.log(ar.includes("naresh"))
// ar.push("manasa");
// ar.push("swapna")
// ar.push("mallesham")
// ar.push(1)
// ar.pop()
// console.log(ar)
var ans=[];
function fizbuzz(cnt){
    for(var i=1;i<=cnt;i++){
        if(i%3==0) {
            ans.push("Fizz");
        }
        else if(i%5==0){
            ans.push("Buzz");
        }
        else if(i%3==0 && i%5==0) {
            ans.push("FizzBuzz");
        }
        else{
            ans.push(i);
        }
    }
}
fizbuzz(10)
console.log(ans)