function myAtoi(s: string): number {
  let i = 0;
    const n = s.length;
    let sign = 1;
    let result = 0;

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Skip leading spaces
    while (i < n && s[i] === " ") {
        i++;
    }

    // Check for optional sign
    if (i < n && (s[i] === "+" || s[i] === "-")) {
        if (s[i] === "-") {
            sign = -1;
        }
        i++;
    }

    // Read digits
    while (i < n && s[i] >= "0" && s[i] <= "9") {
        const digit = Number(s[i]);

        // Check for overflow
        if (
            result > Math.floor(INT_MAX / 10) ||
            (result === Math.floor(INT_MAX / 10) && digit > 7)
        ) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return sign * result;
};