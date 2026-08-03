function stoneGameIII(stoneValue: number[]): string {
    const n = stoneValue.length;
    const memo: (number | undefined)[] = new Array(n);

    function solve(i: number): number {
        // Base case
        if (i >= n) return 0;

        // Memoization
        if (memo[i] !== undefined) return memo[i]!;

        // Take 1 stone
        let best = stoneValue[i] - solve(i + 1);

        // Take 2 stones
        if (i + 1 < n) {
            best = Math.max(
                best,
                stoneValue[i] + stoneValue[i + 1] - solve(i + 2)
            );
        }

        // Take 3 stones
        if (i + 2 < n) {
            best = Math.max(
                best,
                stoneValue[i] +
                    stoneValue[i + 1] +
                    stoneValue[i + 2] -
                    solve(i + 3)
            );
        }

        memo[i] = best;
        return best;
    }

    const diff = solve(0);

    if (diff > 0) return "Alice";
    if (diff < 0) return "Bob";
    return "Tie";
}