console.log('Javascript Variables');

//JavaScript Variables

// 1. var (global scope/function scope)
var a = 23;
console.log('Value of a before if block', a)

if ( a == 23)
{
    a = 25;
    var b = 90;
    console.log('Value of a from if block', a);
    console.log('Value of b from if block', b);
}

console.log('Value of a after the if block', a);
console.log('Value of b after if block', b);

// 2. let (block level scope, can change value once assigned)
// console.log('Let Variable');
// let a = 27;
// console.log('Value of a before if block', a)

// if ( a == 27)
// {
//     a = 25;
//     let b = 89;
//     console.log('Value of a from if block', a);
//     console.log('Value of b from if block', b);
// }

// console.log('Value of a after the if block', a);
// console.log('Value of b after the if block', b);

//3. const (block level scope, can't change the value once assigned)
// console.log('Const Variable');
// const a = 45;
// console.log('Value of a before if block', a);

// if ( a == 45)
// {
//     // a = 67;
//     // console.log('Value of a from if block', a);

//     const b = 78;
//     console.log('Value of b from if block', b);

// }
// console.log('Value of a after if block', a);
// console.log('Value of b after if block', b);

//Template String / Literals
// const name = 'Urooj'
// const age = 23

// console.log(`My name is ${name} and I am ${age} years old. `);
