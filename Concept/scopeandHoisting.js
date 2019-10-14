// Scope and Hoisting

let x = 'red';

{
    let x = 'green'

    console.log('First: ', x); // green

    (function() {
        console.log('Second: ', x); // undefined

        var x = 'blue'

        console.log('Third: ', x); // blue
    })();
}

console.log('Fourth: ', x); // red