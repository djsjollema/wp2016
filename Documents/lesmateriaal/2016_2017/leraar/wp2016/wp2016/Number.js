Number.prototype.isInteger = function() {
    var ans = false;
    if (this % 1 == 0) {
        ans = true;
    }
    return ans;
};

Number.prototype.isNatural = function(){
  var ans = false;
  if(this.isInteger && this>=0){
    ans = true;
  }
  return ans;
}

Number.prototype.isDivisor = function(a){
  var ans = false;
  if((this/a).isInteger()){
    var ans = true;
  }
  return ans;
}

Number.prototype.divisors = function() {
    var ans = [];
    if (this.isInteger()) {
        for (let i = 1; i < Math.abs(this / 2+1 ); i++) {
            if ((this).isDivisor(i)) {
                ans.push(i);
            }
        }
        ans.push(this);
    }
    return ans;

}
