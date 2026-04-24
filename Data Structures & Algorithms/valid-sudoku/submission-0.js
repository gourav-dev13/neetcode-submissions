class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Set();
        let cols = new Set();
        let boxes = new Set();

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {

            let val = board[r][c];

            if (val === ".") continue;

            let rowKey = `${r}-${val}`;
            let colKey = `${c}-${val}`;
            let boxKey = `${Math.floor(r/3)}-${Math.floor(c/3)}-${val}`;

            if (rows.has(rowKey) || cols.has(colKey) || boxes.has(boxKey)) {
                return false;
            }

            rows.add(rowKey);
            cols.add(colKey);
            boxes.add(boxKey);
        }
    }

    return true;
    }
}
