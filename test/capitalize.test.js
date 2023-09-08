const capitalize = require('../functions/capitalize')
const chai = require('chai')
const expect = chai.expect

describe('Tests for Capitalize function', () => {
    it('capitalize should be a function', ()=>{
        expect(capitalize).to.be.a('function')
    })

    it('capitalize should return a string if no arg is passed', ()=>{
        expect(capitalize()).to.be.a('string')
    })

    it('capitalize should return a string if arg is an empty string', ()=>{
        expect(capitalize('')).to.be.equal('')
    })

    it('capitalize should turn hello into Hello', ()=>{
        expect(capitalize('hello')).to.be.equal('Hello')
    })
})