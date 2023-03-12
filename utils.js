let io = {
moonen: {
utils: {
Math: {
    // product of integers in range from low to high, inclusive
    rangeProduct: (low, high) => [...Array(high-low+1).keys()].map(x=>x+low).reduce((acc,val)=>acc*val),
    factorial: n => n>=0?(n===1||n===0)?1:n*io.moonen.utils.Math.factorial(n-1):undefined,
    // chooseWithoutReplacement: (n,k) => n<k?0:n=k?1:fac(n)/(fac(k)*fac(n-k)),
    // Converts n and k to a number and then computes n choose k
    chooseWithoutReplacement: (n, k) => {
        n = Number(n);
        k = Number(k);
        if (!Number.isInteger(n) || !Number.isInteger(k)) return undefined;
        if (n<k || n < 1 || k < 1) return 0;
        if (n===k) return 1;
        // now we know n>k && n>(n-k) so we can do this to handle numbers that would otherwise overflow with the factorial function
        if (k>(n-k)) return io.moonen.utils.Math.rangeProduct(k+1,n)/io.moonen.utils.Math.factorial(n-k);
        return io.moonen.utils.Math.rangeProduct((n-k),n)/io.moonen.utils.Math.factorial(k);
    },
    multinomialCoefficient: (n, sizes) => io.moonen.utils.Math.factorial(n)/sizes.map(io.moonen.utils.Math.factorial).reduce((acc, val) => acc*val)
}
}
}
}

export default io;