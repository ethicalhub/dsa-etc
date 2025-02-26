function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function findPairs(targetGCD, targetLCM) {
    let product = targetGCD * targetLCM; 
    let pairs = [];

    for (let a = 1; a * a <= product; a++) {
        if (product % a === 0) {
            let b = product / a;
            if (gcd(a, b) === targetGCD && lcm(a, b) === targetLCM) {
                pairs.push([a, b]);
                if (a !== b) pairs.push([b, a]);
            }
        }
    }
    
    return pairs;
}

console.log(findPairs(3, 12));
