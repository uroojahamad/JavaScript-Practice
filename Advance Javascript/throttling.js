console.log("Throttling");

const expensive = () =>{
    console.log("Expensive Function call")
}

const throttle = (func, limit) => {
    let flag = true;
    return function(){
        let context = this;
        let args = arguments;
        if(flag){
            func.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true  
            }, limit);
        }
    }
}
const betterExperience = throttle(expensive, 2000)
document.querySelector("#btn").addEventListener("resize", betterExperience());