var ans=[]
function helper(cnt){
    while(cnt<20){
        if(cnt%3==0){
            ans.push("Fizz");
        }
        else if(cnt%5==0){
            ans.push("Buzz");
        }
        else if(cnt%3==0 && cnt%5==0){
            ans.push("FizzBuzz");
        }
        else{
            ans.push(cnt);
        }
        cnt++;
    }
}
helper(0)
console.log(ans);