function tosum(n) {
    let ans  = 0;
    for (let i = 0; i < n; i++) {
        ans = ans + i;
    }
    return ans;
}
let ans= tosum(100);
console.log(ans);