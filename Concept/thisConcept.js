// this concept

/**
 * Conclusion
 * In order to make `this` works
 * First should be an function expression
 * Should attach with member of object itself
 */

var vehicle = {
    type: 'sedan',
    logInfo: function() {
        var THIS = this;
        console.log('1.this.type', this.type); // sedan
        console.log('1.THIS.type', THIS.type); // sedan

        (function() {
            console.log('2.this.type', this.type); // undefined
            console.log('2.THIS.type', THIS.type); // sedan
        })();
    }
}

vehicle.logInfo();

var expression = {
    ele: 'World!',
    Hello: function() {
        console.log(
                'Hello', this.ele
            )
            // // Fail
            // (function () {
            //   console.log(
            //     'My', this.ele
            //   );
            // })();
    }
};

expression.boast = function() {
    console.log(
        'My', this.ele
    );
    console.log('this', this)
}

expression.Hello();
expression.boast();

// Fail
// var arrow = {
//   ele: 'World!',
//   Hello: () => {
//     console.log(
//       'Hello', this.ele
//     );
//   }
// };

// arrow.Hello();