function romanToInt(s: string): number {

    const value = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;
    let prev = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const current = value[s[i] as keyof typeof value]
        if (current < prev) {
            total -= current;
        } else {
            total += current;
        }
        prev = current
    }

    return total;

};