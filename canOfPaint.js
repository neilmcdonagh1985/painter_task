const CanOfPaint = function(litres) {
  this.litres = litres;
}

CanOfPaint.prototype.checkIfEmpty = function() {
  if (this.litres === 0) {
    return true
  } else {
    return false
  }
}

CanOfPaint.prototype.emptyPaint = function() {
  this.litres = 0
}

module.exports = CanOfPaint
