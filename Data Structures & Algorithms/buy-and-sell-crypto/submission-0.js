class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;   // buy
        let right = 1;  // sell
        let maxVal = 0;
       while(right < prices.length){
            if(prices[left] < prices[right]){
                let profit = prices[right] - prices[left];
                maxVal= Math.max(profit, maxVal);
            }else{
                left = right;
            }
            right++;
        }
        return maxVal;
    }
}
