const capitalize = require('../functions/capitalize')
const chai = require('chai')
const expect = chai.expect

describe('Tests for Capitalize function', () => {
    it('capitalize should be a function', ()=>{
        expect(capitalize).to.be.a('function')
    })

    it('capitalize should return a string', ()=>{
        expect(capitalize('hello')).to.be.a('string')
    })
})