const countDigit = (n) => {
    if (n === 0) return 1;  // ✅ Edge case for 0

    let count = 0;
    n = Math.abs(n);

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;    
    }
    console.log(count);
    return count;
};