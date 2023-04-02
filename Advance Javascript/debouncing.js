console.log("Debouncing")

let counter = 0; 
const getData = () =>{
    console.log(`Fetching Data....${counter++}`);
}

const debounce = (func, delay) =>{
    let timer;
    return (arguments) =>{
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args)
        }, delay);
    }
}

const search = debounce(getData, 300);
