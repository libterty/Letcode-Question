const _ = require('lodash')
const bar = {
    bar1: 'bar1',
    bar2: 'bar2'
}

const clone = {
    a: 1,
    foo: 'foo',
    bar,
    quote: () => {
        console.log('Hello World!')
    }
}

const newClone = Object.assign({}, clone);
const spreadClone = {...clone };
const jsonClone = JSON.parse(JSON.stringify(clone));
const lodashClone = _.cloneDeep(clone)


console.log(Object.is(newClone.bar, bar))

console.log('#########################')
console.log('clone', clone);
console.log('-----------------------');
console.log('newClone', newClone);
console.log('-----------------------');
console.log('spreadClone', spreadClone);
console.log('-----------------------');
console.log('jsonClone', jsonClone);
console.log('-----------------------');
console.log('lodashClone', lodashClone);

newClone.a = 2;
newClone.bar.bar1 = 'bar123'

console.log('#########################')
console.log('clone', clone);
console.log('-----------------------');
console.log('newClone', newClone);
console.log('-----------------------');
console.log('spreadClone', spreadClone);
console.log('-----------------------');
console.log('jsonClone', jsonClone);
console.log('-----------------------');
console.log('lodashClone', lodashClone);