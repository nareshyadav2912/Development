var a=1;
var b=1;
console.log(a)
console.log(b)
for(var i=2;i<=10;i++){
    var c=a+b;
    console.log(c);
    a=b;
    b=c;
}
