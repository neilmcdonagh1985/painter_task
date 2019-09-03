const assert = require('assert')
const Decorator = require('../decorator')
const CanOfPaint = require('../canOfPaint')

describe('decorator', function() {

  let decorator
  let canOfPaint

  beforeEach(function() {
    decorator = new Decorator()
    canOfPaint1 = new CanOfPaint(2)
    canOfPaint2 = new CanOfPaint(1)
    canOfPaint3 = new CanOfPaint(5)
  })


  it('should start with empty paint stock', function(){
    actual = decorator.paintStock
    assert.deepStrictEqual(actual, [])
  })

  it('should be able to add can of pain', function() {
    decorator.addCanOfPaint(canOfPaint1)
    actual = decorator.paintStock
    assert.deepStrictEqual(actual, [canOfPaint1])
  })

  it('should be able to calculate total litres of paint', function() {
    decorator.addCanOfPaint(canOfPaint1)
    decorator.addCanOfPaint(canOfPaint3)
    actual = decorator.calculateTotalLitres()
    assert.strictEqual(actual, 7)
  })


  it('should be able to calculate if it has enough paint')
  it('should be able to paint room if it has enough paint')


})
