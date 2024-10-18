// let a = [1,2,3,4,5,6];
// let b = Math.random(2);
// console.log(b);

// let c=Array.from({length: 40}, () => Math.floor(Math.random() * 40));
// console.log(c);
// let d  = a.map((x)=>x-1);
// console.log(d)
// let e = a.filter((x)=>x%2==0).map(x=>x*2);
// console.log(e)
let stu = [
    {
        name:"keshav1",
        class:"cse-ds",
        score : 40
    },
    {
        name:"keshav2",
        class:"cse-ds",
        score : 70
    },
    {
        "name":"keshav3",
        "class":"cse-ds",
        score : 100
    },
    {
        "name":"keshav3",
        "class":"cse-ds",
        score : 100
    }
]
console.log(stu.filter((x)=>x.score>60).map((x)=>x.name));
let x=10;
let sum = stu.reduce((x,s)=>s.score+x,0)
console.log(sum,x)