function remainingMethods(
    n: number,
    k: number,
    invocations: number[][]
): number[] {
    // Build graph
    const graph: number[][] = Array.from({ length: n }, () => []);

    for (const [u, v] of invocations) {
        graph[u].push(v);
    }

    // Find all suspicious methods
    const suspicious = new Set<number>();

    function dfs(node: number): void {
        if (suspicious.has(node)) return;

        suspicious.add(node);

        for (const next of graph[node]) {
            dfs(next);
        }
    }

    dfs(k);

    // Check if any non-suspicious method calls a suspicious method
    for (const [u, v] of invocations) {
        if (!suspicious.has(u) && suspicious.has(v)) {
            const ans: number[] = [];
            for (let i = 0; i < n; i++) {
                ans.push(i);
            }
            return ans;
        }
    }

    // Return all non-suspicious methods
    const ans: number[] = [];

    for (let i = 0; i < n; i++) {
        if (!suspicious.has(i)) {
            ans.push(i);
        }
    }

    return ans;
}