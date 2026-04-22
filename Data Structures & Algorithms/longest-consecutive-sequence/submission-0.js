class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        let set = new Set(nums);
        let current = -1;
        let count = 0;
        for(let n of set){
            if(set.has(n-1)){
                continue;
            }else{
                current = n;
                count = 1;
                while(set.has(current+1)){
                    current ++;
                    count ++;
                }
            }
            longest = Math.max(longest,count);
        }
        return longest;
    }
}
