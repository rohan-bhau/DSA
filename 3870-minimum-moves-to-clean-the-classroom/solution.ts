function minMoves(classroom: string[], energy: number): number {
    const m = classroom.length;
    const n = classroom[0].length;

    let startR = 0;
    let startC = 0;

    // Give every litter an ID
    const litterId: number[][] = Array.from(
        { length: m },
        () => Array(n).fill(-1)
    );

    let litterCount = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (classroom[r][c] === 'S') {
                startR = r;
                startC = c;
            }

            if (classroom[r][c] === 'L') {
                litterId[r][c] = litterCount++;
            }
        }
    }

    // No litter
    if (litterCount === 0) {
        return 0;
    }

    const fullMask = (1 << litterCount) - 1;
    const maskCount = 1 << litterCount;

    /*
        best[cell][mask] = maximum energy with which
        we have reached this cell while having this mask.
        
        -1 means never visited.
    */
    const best: Int16Array[] = Array.from(
        { length: m * n },
        () => new Int16Array(maskCount).fill(-1)
    );

    type State = [number, number, number, number];
    // [row, col, energy, mask]

    const queue: State[] = [
        [startR, startC, energy, 0]
    ];

    let head = 0;
    let moves = 0;

    best[startR * n + startC][0] = energy;

    const directions: [number, number][] = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    while (head < queue.length) {
        const levelEnd = queue.length;

        while (head < levelEnd) {
            const [r, c, currentEnergy, mask] = queue[head++];

            if (mask === fullMask) {
                return moves;
            }

            // Cannot make another move
            if (currentEnergy === 0) {
                continue;
            }

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                // Outside grid
                if (
                    nr < 0 ||
                    nr >= m ||
                    nc < 0 ||
                    nc >= n
                ) {
                    continue;
                }

                // Wall
                if (classroom[nr][nc] === 'X') {
                    continue;
                }

                // Moving costs 1 energy
                let newEnergy = currentEnergy - 1;
                let newMask = mask;

                // Collect litter
                if (classroom[nr][nc] === 'L') {
                    const id = litterId[nr][nc];
                    newMask |= (1 << id);
                }

                // Recharge
                if (classroom[nr][nc] === 'R') {
                    newEnergy = energy;
                }

                const cellIndex = nr * n + nc;

                /*
                    IMPORTANT:
                    
                    If we have already reached this
                    (cell, mask) with MORE energy,
                    this state can never be better.
                */
                if (best[cellIndex][newMask] >= newEnergy) {
                    continue;
                }

                best[cellIndex][newMask] = newEnergy;

                queue.push([
                    nr,
                    nc,
                    newEnergy,
                    newMask
                ]);
            }
        }

        moves++;
    }

    return -1;
}