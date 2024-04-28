function squre(n) {
    return  n * n;
}

function sumsqure(a, b) {
    const val1 = squre(a);
    const val2 = squre(b);
    
    return val1 + val2;
}

const ans = sumsqure(1, 2);
console.log(ans);