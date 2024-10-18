// hello = ()=>{
//     console.log("hello");
// }
// console.log("start");
// setTimeout(hello,1000);
// console.log("end");

// console.log("start");
// setTimeout(()=>{
//     console.log("first");
//     setTimeout(()=>{
//         console.log("second");
//     },1000)
// },1000)
// console.log("end")

// const p = new Promise((resolve,reject)=>{
//     let s = false;
//     if(s){
//         resolve("sucess");
//     }
//     else{
//         reject("reject");
//     }
// });

// p.then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// console.log("end")

const task = (msg,delay)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            // console.log(msg);
            resolve(msg)
        },delay)
    })
}
// task("first",1000)
// .then(()=>task("second",0))
// .then(()=>task("third"),1000)

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
task(stu,1000).then((msg)=>console.log(msg.filter((x)=>x.score>60).map(((x)=>x.score*2)).reduce((x,y)=>x+y,0)))
.catch((err)=>{
    console.log("error");
})