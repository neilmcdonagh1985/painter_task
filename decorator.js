const Decorator = function() {
  this.paintStock = []
}

Decorator.prototype.addCanOfPaint = function(canOfPaint) {
  this.paintStock.push(canOfPaint)
}

Decorator.prototype.calculateTotalLitres = function() {
  let total = 0
  for (paintCan of this.paintStock) {
    total += paintCan.litres
  }
   return total
}

module.exports = Decorator
