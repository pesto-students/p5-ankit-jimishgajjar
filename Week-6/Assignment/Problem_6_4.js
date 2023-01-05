function stockMaxProfit(stockPrice) {
  let minProfit = stockPrice[0];
  let maxProfit = 0;

  for (let i = 0; i <= stockPrice.length; i++) {
    if (stockPrice[i] < minProfit) {
      minProfit = stockPrice[i];
    } else {
      let profit = stockPrice[i] - minProfit;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return `Maximum Profit You Can Earn Upto : ${maxProfit}`;
}

console.log(stockMaxProfit([7, 1, 5, 3, 6, 4]));
console.log(stockMaxProfit([7, 6, 4, 3, 1]));

// Time complexity: O(n)
// Space complexity: O(1)
