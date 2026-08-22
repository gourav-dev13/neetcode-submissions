class Solution {

    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);

        while (left < right) {
            const k = Math.floor((left + right) / 2);

            let hours = 0;

            for (const pile of piles) {
                hours += Math.ceil(pile / k);
            }

            if (hours <= h) {
                right = k;
            } else {
                left = k + 1;
            }
        }

        return left;
    }
}