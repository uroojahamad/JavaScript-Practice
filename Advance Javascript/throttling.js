console.log("Throttling");

const expensive = () =>{
    let count = 0 ;
    console.log(`Expensive Function call ${count++}`)
}

// const throttle = (func, limit) => {
//     let flag = true;
//     let count = 0;
//     return function(){
//         let context = this;
//         let args = arguments;
//         if(flag){
//             func.apply(context, args);
//             flag = false;
//             setTimeout(() => {
//                 console.log(count++)
//                 flag = true  
//             }, limit);
//         }
//     }
// }

const throttle = (func, delay) =>{
    let last = 0;
    return (...args) =>{
        let now = new Date().getTime();
        console.log(now)
        if(now - last < delay) return;
        last = now
        return func(...args)
    }
}
const betterExperience = throttle(expensive, 2000)
document.querySelector("#btn").addEventListener("resize", betterExperience());