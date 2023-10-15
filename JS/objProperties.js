function human (name,age,lang) {
    this.name=name;
    this.age=age;
    this.lang=lang;
}
var obj1=new human("naresh",22,["telugu","english"])
var obj2=new human("suresh",20,["english","hindi"])
console.log(obj1.lang)
console.log(obj1)
console.log(obj2)