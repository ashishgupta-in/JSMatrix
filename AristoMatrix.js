const multiplyMatrices = (a, b) => {
    if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
       throw new Error('arguments should be in 2-dimensional array format');
    }
    let x = a.length,
    z = a[0].length,
    y = b[0].length;
    if (b.length !== z) {
       throw new Error('number of columns in the first matrix should be the same as the number of rows in the second');
    }
    let productRow = Array.apply(null, new Array(y)).map(Number.prototype.valueOf, 0);
    let product = new Array(x);
    for (let p = 0; p < x; p++) {
       product[p] = productRow.slice();
    }
    for (let i = 0; i < x; i++) {
       for (let j = 0; j < y; j++) {
          for (let k = 0; k < z; k++) {
             product[i][j] += a[i][k] * b[k][j];
          }
       }
    }
    return product;
}



const addMatrices = (...args) =>{
    for(let i=0; i<args.length; i++){
       if (!Array.isArray(args[i]) || !args[i].length){
          throw new Error('arguments should be in 2-dimensional array format');
       } 
    }
 
    rows = 0; cols = 0
 
    // rows check
    for(let m=0; m<args.length; m++){
       if(rows==0)
          rows = args[m].length
       if(rows!=args[m].length)
          throw new Error('number of rows should be same')
    }
 
    let result = new Array(rows);
    
    // columns check
    for(let i=0; i<args[0].length; i++){
       cols = 0
       for(let m=0; m<args.length; m++){
          if(cols==0)
          cols=args[m][i].length
          if(cols != args[m][i].length)
          throw new Error('number of columns should be same')
       }
       let resultRow = Array.apply(null, new Array(cols)).map(Number.prototype.valueOf, 0);
       result[i] = resultRow.slice()
    }
    for(m=0; m<args.length; m++){
       for(i=0; i<args[m].length; i++){
          for(j=0; j<args[m][i].length; j++)
             result[i][j] += args[m][i][j] 
       }
    }
    return result
}

module.exports = {
    multiplyMatrices,
    addMatrices
};