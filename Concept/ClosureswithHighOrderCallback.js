// Closures, High-Order Fn and Callbacks

// Higer-Order Fn returns a function itself and taking another function as an argument
function sum(num1) {
    return function(num2) {
        return function(num3) {
            return function(num4) {
                return function(num5) {
                    const total = num1 + num2 + num3 + num4 + num5;

                    return function(callback) {
                        callback(total);
                    }
                }
            }
        }
    }
}

sum(1)(2)(3)(4)(5)(result => console.log('High order Callback: ', result)); // result eq 15