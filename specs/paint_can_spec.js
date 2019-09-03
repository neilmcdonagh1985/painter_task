const assert = require('assert')
const CanOfPaint = require('../canOfPaint')

describe('paintCan', function() {

  let canOfPaint

beforeEach(function() {
  canOfPaint1 = new CanOfPaint(2)
  canOfPaint2 = new CanOfPaint(1)
  canOfPaint3 = new CanOfPaint(5)
  canOfPaint4 = new CanOfPaint(0)

})

it('should have a number of litres of paint', function() {
  const actual = canOfPaint3.litres
  assert.strictEqual(actual, 5)
})


it('be ale to check if it is empty', function() {
  const actual = canOfPaint2.checkIfEmpty()
  assert.strictEqual(actual, false)
})

it('should be able to empty itself of paint')
  canOfPaint1.emptyPaint()
  const actual = canOfPaint1.litres
  assert.strictEqual(actual, 0)

})
