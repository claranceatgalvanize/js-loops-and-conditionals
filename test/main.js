const chai = require('chai')
const assert = chai.assert
const main = require('../src/main')

// Listen for console.log statements
require('mocha-sinon')
function stubFn () { this.sinon.stub(console, 'log') }

describe('main', () => {

  beforeEach(stubFn)

  it('question0', () => {
    var input = [ 5, 20, 11, 42, 2, 19 ]
    var expected = [ 20, 42, 2 ]
    main.question0(input)

    assert.equal(console.log.callCount, expected.length)
    expected.forEach(num => assert.isTrue(console.log.calledWith(num)))
  })

  it('question1', () => {
    const input = [ 2, 4, 8, 16 ]
    const expected = [ 16, 32 ]
    main.question1(input)

    assert.equal(console.log.callCount, expected.length)
    expected.forEach(num => assert.isTrue(console.log.calledWith(num)))
  })

  it('question2', () => {
    const input = [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]
    main.question2(input)

    assert.equal(console.log.callCount, input.length)
    assert.isTrue(console.log.calledWith('I hate Mondays more than Garfield.'))
    assert.isTrue(console.log.calledWith('Everybody\'s working for the weekend.'))
    assert.isTrue(console.log.calledWith('Almost there...'))
    assert.isTrue(console.log.calledWith('Yay, it\'s the weekend!'))
  })
})
