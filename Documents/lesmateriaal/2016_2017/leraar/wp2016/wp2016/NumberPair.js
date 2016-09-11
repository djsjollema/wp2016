class NumberPair {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    sum() {
        return this.a + this.b;
    }

    longDivision(numDecimals) {
        var result = "",
            modulo;
        var dividend = this.a;
        var divisor = this.b;
        var entier, decimal, repetend;
        modulo = this.a % this.b;
        //result = Math.floor(dividend / divisor) + ".";
        entier = Math.floor(dividend / divisor) ;

        if (numDecimals != null) {
            for (let i = 0; i < numDecimals; i++) {
                modulo *= 10;
                result += Math.floor(modulo / divisor);
                modulo = modulo % divisor;
            }
        } else {
          var old_modulo = [];
          while(old_modulo.indexOf(modulo)==-1){
            old_modulo.push(modulo);
            modulo *= 10;
            result += Math.floor(modulo / divisor);
            modulo = modulo % divisor;
          };
          decimal = result;
          repetend = result.splice(old_modulo.indexOf(modulo)-1);
          console.log(old_modulo.indexOf(modulo));
          console.log(entier+" ; "+decimal+" ; "+repetend);
        }
        return result;
    }
}
