class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const need = new Map();

        for (const ch of t) {
            need.set(ch, (need.get(ch) || 0) + 1);
        }

        const window = new Map();
        let left = 0;
        let formed = 0;
        let minLen = Infinity;
        let start = 0;

        for (let right = 0; right < s.length; right++) {
            const ch = s[right];

            window.set(ch, (window.get(ch) || 0) + 1);

            // This character now satisfies one required occurrence.
            if (need.has(ch) && window.get(ch) <= need.get(ch)) {
                formed++;
            }

            // Shrink the window while it remains valid.
            while (formed === t.length) {
                const len = right - left + 1;

                if (len < minLen) {
                    minLen = len;
                    start = left;
                }

                const leftChar = s[left];
                window.set(leftChar, window.get(leftChar) - 1);

                if (
                    need.has(leftChar) &&
                    window.get(leftChar) < need.get(leftChar)
                ) {
                    formed--;
                }

                left++;
            }
        }

        return minLen === Infinity ? "" : s.slice(start, start + minLen);
    }
}