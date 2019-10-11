// Best Time to Buy and Sell Stock II

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // this will fail at [1,2,3,4,5]

    // if (prices.length <= 1) return false;
    // var profits = 0;
    // for (var i = 0; i<prices.length-1; i++) {
    //     if(prices[i] > prices[i-1]) {
    //         profits += prices[i] - prices[i-1];
    //     }
    // }
    // return profits


    var profit = 0;
    prices.forEach(function(item, id) {
        if (id > 0) {
            if (item > prices[id - 1]) {
                profit += item - prices[id - 1];
            }
        }
    })
    return profit;
};